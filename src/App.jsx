import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Policies } from "./pages/Policies";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/policies" element={<Policies />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
