import { useState } from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GameComp from "./components/Game/gameComp";
import Lesson from "./components/Home/Lessons";
import Leaderboard from "./components/Home/Leaderboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameComp />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
