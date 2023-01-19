import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UserProvider from "./context/UserContext";
import AddTechnology from "./pages/AddTechnology";
import Dominated from "./pages/Dominated";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <UserProvider>
      <div className="flex overflow-y-hidden flex-col lg:flex-row dark:bg-[#282C35]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/dominated" element={<Dominated />} />
          <Route path="/technologies/add" element={<AddTechnology />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
