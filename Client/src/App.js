import Home from "./pages/Home";
// import Header from "./Components/header/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
