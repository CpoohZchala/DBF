import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Financial from "./pages/FinancialReports"
import Layout from "../Layouts";
import ContactUs from "./pages/ContactUs"
import BranchList from "./pages/Branches"
import Products from "./pages/Products"
import Gold from "./pages/GoldLoan"
import Educational from "./pages/EducationalLoan"
import Micro from "./pages/MicroLoans"
import News from "./pages/News"

export default function App() {
  return (
   <Layout>
    <div className = "flex flex-col justify-center">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/financial-reports" element={<Financial />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/branches" element={<BranchList />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/gold" element={<Gold/>} />
      <Route path="/educational" element={<Educational/>} />
      <Route path="/micro" element={<Micro/>} />
      <Route path="/news" element={<News/>} />


      



      

      </Routes>
    </div>

   </Layout>
  );
}
