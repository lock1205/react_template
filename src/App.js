import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
