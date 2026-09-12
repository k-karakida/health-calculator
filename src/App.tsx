import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import IdealWeight from "./pages/IdealWeight";
import BmiTable from "./pages/BmiTable";
import HeightWeight from "./pages/HeightWeight";

import Diet from "./pages/Diet";
import BasalMetabolism from "./pages/BasalMetabolism";
import CalorieBurn from "./pages/CalorieBurn";
import CalorieIntake from "./pages/CalorieIntake";
import CalorieBalance from "./pages/CalorieBalance";
import DietPeriod from "./pages/DietPeriod";

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
          {/* BMI・体重計算 */}
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/ideal-weight" element={<IdealWeight />} />
          <Route path="/bmi-table" element={<BmiTable />} />
          <Route path="/height-weight" element={<HeightWeight />} />

          {/* ダイエット計算 */}
          <Route path="/diet" element={<Diet />} />
          <Route path="/basal-metabolism" element={<BasalMetabolism />} />
          <Route path="/calorie-burn" element={<CalorieBurn />} />
          <Route path="/calorie-intake" element={<CalorieIntake />} />
          <Route path="/calorie-balance" element={<CalorieBalance />} />
          <Route path="/diet-period" element={<DietPeriod />} />

          {/* その他 */}
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