import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Admin from "./pages/admin/dashboard";
import Agent from "./pages/agent/dashboard";
import Client from "./pages/client/dashboard";
import AddTickets from "./pages/client/addtickets";
import AdminLayout from "./layouts/AdminLayout";
import AgentLayout from "./layouts/AgentLayout";
import ClientLayout from "./layouts/ClientLayout";
import AddAgents from "./pages/admin/AddAgente";
import AgentList from "./pages/admin/Agent";
import ListCliten from "./pages/admin/ListClients";
import MyTickets from "./pages/client/MyTickets";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


    <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Admin />} />
        <Route path="AddAgent" element={<AddAgents />} />
        <Route path="AgentList" element={<AgentList />} />
        <Route path="ClitenList" element={<ListCliten />} />
    </Route>

    <Route path="/agent" element={<AgentLayout />}>
        <Route path="dashboard" element={<Agent />} />
    </Route>

      <Route path="/client" element={<ClientLayout />}>
        <Route path="dashboard" element={<Client />} />
        <Route path="AddTickets" element={<AddTickets />} />
        <Route path="MyTickets" element={<MyTickets />} />
    </Route>

  
    </Routes>
  );
}

export default App;
