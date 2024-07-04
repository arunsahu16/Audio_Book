import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Home from './Pages/Home/Home';
import Blog from './Pages/BlogPage/blog';
import Login from "./Pages/Login/LoginPage";
import UserRegister from "./Pages/Login/UserRegister";
import ContactUs from "./Pages/Contact/Contact";
import ScrollTop from "./Components/ScrollTop";
import Footer from "./Components/Footer/Footer";
import SinglePlaylist from "./Pages/Playlist/SinglePlaylist";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<UserRegister />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/details" element={<SinglePlaylist />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
