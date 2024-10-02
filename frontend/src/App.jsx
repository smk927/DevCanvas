import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoutes";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import "./styles/general.css";
import "./styles/landing.css";
import ActivateAccount from "./pages/ActivateAccount";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <div className="maindiv">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/authentication/activate/:uidb64/:token"
            element={<ActivateAccount />}
          />
          <Route path="/authentication/logout/" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
