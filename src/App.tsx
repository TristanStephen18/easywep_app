import TDBankAccount from "./pages/MyAccounts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 

  return (
<BrowserRouter>
<Routes>
   <Route
          path="/"
          element={
           <TDBankAccount/>
          }
        />
</Routes>
</BrowserRouter>
  );

}

export default App;
