import { Link } from "react-router-dom";

export default function AgentSidebar(){
    return(
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Agent Panel</h2>

      <ul className="space-y-3">
        <li><Link to="/agent/dashboard">dashbord</Link></li>
        <li><Link to="/agent/alltickets">All Tickets</Link></li>
        <li><Link to="/agent/MyTickets">My Tickets</Link></li>
      </ul>
    </div>
    )
}