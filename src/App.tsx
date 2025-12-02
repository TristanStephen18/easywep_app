import Dashboard from "./pages/dashboard/Dashboard";
import TDBankAccount from "./pages/MyAccounts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectHome from "./Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectHome />} />
        <Route path="/waw/ezw/servlet/TransferInFromNorthStarServlet" element={<TDBankAccount />} />
        <Route path="/ca/en/personal-banking" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
