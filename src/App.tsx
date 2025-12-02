import Dashboard from "./pages/dashboard/Dashboard";
import TDBankAccount from "./pages/MyAccounts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/waw/ezw/servlet/TransferInFromNorthStarServlet" element={<TDBankAccount />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
