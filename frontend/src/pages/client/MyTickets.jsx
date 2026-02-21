import React, { useEffect, useState } from 'react';
import { getMytickts } from '../../services/Tickets';
import ChatBox from "../../components/ChatBox";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  // (حسب المشروع ديالك — عدل إذا عندك context)
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const getMyTickets = async () => {
    try {
      const res = await getMytickts();

      let ListTickets = [];
      if (res?.data) {
        if (Array.isArray(res.data)) {
          ListTickets = res.data;
        } else if (res.data.tickets && Array.isArray(res.data.tickets)) {
          ListTickets = res.data.tickets;
        }
      }
      setTickets(ListTickets);
    } catch (e) {
      console.log("error in ticket client ", e);
      setTickets([]);
    }
  };

  useEffect(() => {
    getMyTickets();
  }, []);

  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">List Tickets</h1>
        <p className="text-gray-600">Click a ticket to open chat</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th>Title</th>
              <th>Description</th>
              <th>Agent</th>
              <th>Status</th>
              <th>Chat</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket._id}
                className="border-b hover:bg-gray-100 cursor-pointer"
              >
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.agent || "Not assigned"}</td>
                <td>{ticket.status}</td>
                <td>
                  <button
                    onClick={() => setSelectedTicketId(ticket._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Open Chat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chat */}
      {selectedTicketId && (
        <div className="mt-6">
          <ChatBox
            ticketId={selectedTicketId}
            token={token}
            currentUser={user}
          />
        </div>
      )}

    </div>
  );
};

export default MyTickets;