import "./App.css";
import { Route, Routes } from "react-router-dom";
import Adduser from "./components/Adduser";
import Tablelist from "./components/Tablelist";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <>
        <Route path="/tablelist" element={<Tablelist />} />
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/edit-user/:userId" element={<Adduser />} />
      </>
    </Routes>
  );
}

export default App;
