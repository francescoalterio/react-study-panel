import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { db } from "./db/db";
import AddTechnology from "./pages/AddTechnology";
import Dominated from "./pages/Dominated";
import Home from "./pages/Home";
import Technologies from "./pages/Technologies";
import { conexionLocalStorage } from "./utils/conexionLocalStorage";

function App() {
  conexionLocalStorage("core", db);

  return (
    <div className="flex overflow-y-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/dominated" element={<Dominated />} />
        <Route path="/technologies/add" element={<AddTechnology />} />
      </Routes>
    </div>
  );
}

export default App;
