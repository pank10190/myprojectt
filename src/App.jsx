import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Contact from "./pages/admin/Contact";
import Careers from "./pages/admin/Careers";
import AdminLayout from "./components/admin/AdminLayout";

export default function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<Login />} />

      {/* Admin Layout with Sidebar */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/contact" element={<Contact />} />
        <Route path="/admin/careers" element={<Careers />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}