import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Artist from "../src/components/Artist";
import Album from "..Album/src/components/Album";
import Search from "../src/components/Search";
import MyNavbar from "../src/components/MyNavbar";
import MySidebar from "../src/components/MySidebar";
import MyPlayer from "../src/components/MyPlayer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <MySidebar />
        <MyPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/album" /> element={<Album />}
          <Route path="/search" /> element={<Search />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
