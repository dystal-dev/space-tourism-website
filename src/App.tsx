import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Navigation from "./components/Navigation";

function App() {
  const location = useLocation();

  const backgrounds: Record<string, string> = {
    "/": "bg-[image:var(--bg-home)]",
    "/destination": "bg-[image:var(--bg-destination)]",
    "/crew": "bg-[image:var(--bg-crew)]",
    "/technology": "bg-[image:var(--bg-technology)]",
  };

  return (
    <div
      className={`${backgrounds[location.pathname]} bg-cover bg-center min-h-screen`}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
