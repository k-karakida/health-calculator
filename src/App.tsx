import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import IdealWeight from "./pages/IdealWeight";
import BmiTable from "./pages/BmiTable";
import HeightWeight from "./pages/HeightWeight";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/ideal-weight" element={<IdealWeight />} />
          <Route path="/bmi-table" element={<BmiTable />} />
          <Route path="/height-weight" element={<HeightWeight />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;