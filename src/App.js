import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personalize from "./pages/Personalize";
import Store from "./pages/Store";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="Store" element={<Store />} />
        <Route path="Personalize" element={<Personalize />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
