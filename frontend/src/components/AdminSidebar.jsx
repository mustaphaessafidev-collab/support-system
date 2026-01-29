import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-3">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/AddAgent">Add Agent</Link></li>
        <li><Link to="/admin/tickets">Tickets</Link></li>
      </ul>
    </div>
  );
}
