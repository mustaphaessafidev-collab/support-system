import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PageError from "./layouts/PageError404";
import Admin from "./pages/admin/dashboard";
import Agent from "./pages/agent/dashboard";
import Client from "./pages/client/dashboard";
import AddTickets from "./pages/client/addtickets";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pagerror" element={<PageError />} />
      <Route path="/admin/dashboard" element={<Admin />} />
      <Route path="/agent/dashboard" element={<Agent />} />
      <Route path="/client/dashboard" element={<Client />} />
      <Route path="/client/AddTickets" element={<AddTickets />} />
    </Routes>
  );
}

export default App;
