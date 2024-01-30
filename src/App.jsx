import { Routes,Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Upload from "./components/Upload";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={< Login />} />
      <Route exact path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;
