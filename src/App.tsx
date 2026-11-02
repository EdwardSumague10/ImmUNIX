import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import Nav from './Nav'
import Hero from './Hero'
import Blog from './Blog'
import Services from './Services'
import Contact from './Contact'



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


