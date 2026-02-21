import React, { useEffect, useRef, useState } from "react";
import { socket, connectSocket, disconnectSocket } from "../services/socket";
import { getMessagesApi, sendMessageApi } from "../services/messages";

export default function ChatBox({ ticketId, token, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  const scrollDown = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {

    if (!ticketId || !token) return;

    // 1) connect socket
    connectSocket();

    // 2) join room (ticket)
    socket.emit("joinTicket", { ticketId });

    // 3) load old messages
    (async () => {
      try {
        const res = await getMessagesApi(token, ticketId);
        setMessages(res.data?.message || []);
        setTimeout(scrollDown, 100);
      } catch (e) {
        console.log("get messages error", e?.response?.data || e.message);
        setMessages([]);
      }
    })();

    // 4) listen new messages realtime
    const onNewMessage = (msg) => {
      // avoid duplicates (optional)
      setMessages((prev) => {
        if (prev.some((m) => m._id === msg._id)) return prev;
        return [...prev, msg];
      });
      setTimeout(scrollDown, 50);
    };

    socket.on("newMessage", onNewMessage);

    // cleanup
    return () => {
      socket.off("newMessage", onNewMessage);
      socket.emit("leaveTicket", { ticketId });
      // ما نفصلش socket إذا عندك صفحات كثيرة كتستعملو
      // disconnectSocket();
    };
  }, [ticketId, token]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await sendMessageApi(token, { ticket: ticketId, text });
      setText("");
      // ملاحظة: الرسالة غادي توصل عبر socket "newMessage"
      // وممكن توصل حتى لنفس المرسل (حيت هو داخل نفس room)
    } catch (e2) {
      alert(e2?.response?.data?.message || "Send failed");
    }
  };

  return (
    <div className="border rounded p-3 bg-white" style={{ maxWidth: 700 }}>
      <div className="mb-2 fw-bold">Chat</div>

      <div
        className="border rounded p-2 mb-2"
        style={{ height: 320, overflowY: "auto", background: "#f8f9fa" }}
      >
        {messages.map((m) => {
          const mine = m?.sender?._id === currentUser?._id;
          return (
            <div
              key={m._id}
              className="mb-2 d-flex"
              style={{ justifyContent: mine ? "flex-end" : "flex-start" }}
            >
              <div
                className="p-2 rounded"
                style={{
                  maxWidth: "75%",
                  background: mine ? "#d1e7dd" : "#e2e3e5",
                }}
              >
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {m?.sender?.name} ({m?.sender?.role})
                </div>
                <div>{m.text}</div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="d-flex gap-2">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}