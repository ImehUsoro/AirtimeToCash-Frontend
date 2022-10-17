import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthState from "./context/auth/authState";
import ProtectedRoute from "./context/auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/Admin-Dashboard/AdminDashboard";
import EmailSent from "./pages/email-sent/EmailSent";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SignUp from "./pages/SignUpPage/SignUp";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import AdminEditModel from "./components/admin-edit-model/AdminEditModel";
import AdminFormPage from "./pages/admin-form/AdminFormPage";
import ProtectedAdminRoute from "./context/auth/ProtectedAdminRoute";
function App() {
  return (
    <Router>
      <ToastContainer />
      <AuthState>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/email-sent" element={<EmailSent />} />
          <Route path="/user/forgot-password" element={<ForgotPassword />} />

          {/* Model Check Route */}
          <Route path="/user/modal" element={<AdminEditModel />} />
          <Route path="/user/setadmin" element={<AdminFormPage />} />

          <Route path="/user/reset-password/:id" element={<ResetPassword />} />
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/user/dashboard/update-user"
            element={
              <ProtectedRoute>
                <UpdateUser />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthState>
    </Router>
  );
}

export default App;
