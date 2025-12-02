import Dashboard from "./pages/dashboard/Dashboard";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./pages/login/LoginPage";
import TDBankAccount from "./pages/MyAccounts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/ca/en/personal-banking" replace />}
        />
        <Route
          path="/waw/ezw/servlet/TransferInFromNorthStarServlet"
          element={<TDBankAccount />}
        />
        <Route path="/ca/en/personal-banking" element={<Dashboard />} />
        <Route path="/myaccounts" element={<Homepage />} />
        <Route path="/authentication" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
