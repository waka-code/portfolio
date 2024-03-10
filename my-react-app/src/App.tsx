import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Work } from "./web/Home/Home";
import { Header } from "./web/Header/Header";
import { Footer } from "./web/PagionFoot/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Work />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
