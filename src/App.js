import "./App.css";
import { Route, Routes } from "react-router-dom";
import Adduser from "./components/Adduser";
import Tablelist from "./components/Tablelist";
function App() {
  return (
    <Routes>
      
        <Route path="/" element={<Tablelist />} />
        <Route path="add-user" element={<Adduser />} />
    
    </Routes>
  );
}

export default App;
