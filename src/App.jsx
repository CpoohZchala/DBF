import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Financial from "./pages/FinancialReports"
import Layout from "../Layouts";
//import Branches from "./pages/Branches";
//import FinancialReports from "./pages/FinancialReports";
//import News from "./pages/News";
//import Contact from "./pages/Contact";
//import Products from "./pages/Products";

export default function App() {
  return (
   <Layout>
    <div className = "flex flex-col justify-center">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/financial-reports" element={<Financial />} />



      </Routes>
    </div>

   </Layout>
  );
}
