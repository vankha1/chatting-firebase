import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import "./style.scss";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
         <Route path="register" element={<Register />} />
         <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
