import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookDemo from "./pages/BookDemo";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/book-demo" element={<BookDemo />} />
        </Routes>
      </div>
    </Router>
  );
}
