import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Shop from './pages/Shop/Shop';
import Services from './pages/Services/Services';
import Project from './pages/Project/Project';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
