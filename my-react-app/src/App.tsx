import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Work } from "./web/Home/Home";
import { Header } from "./web/Header/Header";
import { Footer } from "./web/PagionFoot/Footer";
import { About } from "./web/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
