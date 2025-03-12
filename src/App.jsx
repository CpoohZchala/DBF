import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

//import Navbar from "./section/main/navbar";
//import Footer from "./section/main/footer";
import Home from "./pages/Home";
//import About from "./pages/About";
//import Products from "./pages/Products";
//import Team from "./pages/Team";
//import Branches from "./pages/Branches";
//import FinancialReports from "./pages/FinancialReports";
//import News from "./pages/News";
//import Contact from "./pages/Contact";
import Layout from "../Layouts";

export default function App() {
  return (
   <Layout>
    <div className = "flex flex-col justify-center">
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
    </div>

   </Layout>
  );
}
