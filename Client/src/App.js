import Home from "./pages/Home";
// import Header from "./Components/header/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Posts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
