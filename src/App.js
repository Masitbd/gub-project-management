import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import AddTeacher from "./components/addTeacher/AddTeacher";
import ApplyOnline from "./components/applyOnline/ApplyOnline";
import Bba from "./components/courses/Bba";
import Cse from "./components/courses/Cse";
import Eee from "./components/courses/Eee";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./contactUs/ContactUs";
import Login from "./Login/Login";
import NotFound from "./notFund/NotFound";
import Register from "./Register/Register";
import ReserchList from "./researchList/ReserchList";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cse" element={<Cse />} />
          <Route path="/eee" element={<Eee />} />
          <Route path="/bba" element={<Bba />} />
          <Route path="/applyOnline" element={<ApplyOnline />} />
          <Route path="/researchList" element={<ReserchList />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={'/'} />
          <Route path="addTeacher" element={<AddTeacher />} />
          <Route path="researchList" element={<ReserchList />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
