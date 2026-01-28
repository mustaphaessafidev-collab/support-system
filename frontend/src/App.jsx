import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PageError from "./layouts/PageError404";
import Admin from "./pages/admin/dashboard";
import Agent from "./pages/agent/dashboard";
import Client from "./pages/client/dashboard";
import AddTickets from "./pages/client/addtickets";
import AdminLayout from "./layouts/AdminLayout";
import AgentLayout from "./layouts/AgentLayout";
import ClientLayout from "./layouts/ClientLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


    <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Admin />} />
    </Route>

    <Route path="/agent" element={<AgentLayout />}>
        <Route path="dashboard" element={<Agent />} />
    </Route>

      <Route path="/client" element={<ClientLayout />}>
        <Route path="dashboard" element={<Client />} />
        <Route path="AddTickets" element={<AddTickets />} />
    </Route>

      {/* <Route path="/pagerror" element={<PageError />} />
      <Route path="/admin/dashboard" element={<Admin />} />
      <Route path="/agent/dashboard" element={<Agent />} />
      <Route path="/client/dashboard" element={<Client />} />
      <Route path="/client/AddTickets" element={<AddTickets />} /> */}
    </Routes>
  );
}

export default App;
