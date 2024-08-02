import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
