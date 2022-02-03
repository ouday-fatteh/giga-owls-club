import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Contact from './Pages/Contact';
import NoPage from './Pages/404';
import Navbar from './Components/Navbar/Navbar';
import Suggest from './Pages/Suggest';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="suggest" element={<Suggest />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
