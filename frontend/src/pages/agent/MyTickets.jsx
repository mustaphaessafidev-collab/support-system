import { useEffect, useState } from "react";
import { getMyTicketsAgenten } from "../../services/Tickets";
import ChatBox from "../../components/ChatBox";

const MyTicketsAgent = () => {
  const [data, setData] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const getdata = async () => {
    try {
      const res = await getMyTicketsAgenten();

      let ListTeckets = [];
      if (res?.data) {
        if (Array.isArray(res.data)) {
          ListTeckets = res.data;
        } else if (res.data.tickets && Array.isArray(res.data.tickets)) {
          ListTeckets = res.data.tickets;
        }
      }
      setData(ListTeckets);
    } catch (error) {
      console.error("error in get ticket");
      setData([]);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Tickets</h1>

      <table className="min-w-full table table-striped border">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-4">Title</th>
            <th className="p-4">Description</th>
            <th className="p-4">Client</th>
            <th className="p-4">Client Email</th>
            <th className="p-4">Status</th>
            <th className="p-4">Chat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r._id} className="odd:bg-white even:bg-gray-50">
              <td className="p-4">{r.title}</td>
              <td className="p-4">{r.description}</td>
              <td className="p-4">{r.client.name}</td>
              <td className="p-4">{r.client.email}</td>
              <td className="p-4">{r.status}</td>
              <td className="p-4">
                <button
                  onClick={() => setSelectedTicketId(r._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Open Chat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chat appears here */}
      {selectedTicketId && (
        <div className="mt-6">
          <ChatBox
            ticketId={selectedTicketId}
            token={token}
            currentUser={user}
          />
        </div>
      )}
    </>
  );
};

export default MyTicketsAgent;