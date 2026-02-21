import { Link } from "react-router-dom";

export default function ClientSidebar(){
    return(
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">client Panel</h2>

      <ul className="space-y-3">
        <li><Link to="/client/dashboard">Dashboard</Link></li>
        <li><Link to="/client/AddTickets">Add Ticktes</Link></li>
        <li><Link to="/client/MyTickets">All Tickets</Link></li>
        
      </ul>
    </div>
    )
}