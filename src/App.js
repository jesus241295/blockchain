import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personalize from "./pages/Personalize";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting-";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="webApplication">
        <Navbar />
        <Routes>
          <Route index="/" element={<Home />} />
          <Route path="Store" element={<Store />} />
          <Route path="Personalize" element={<Personalize />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
