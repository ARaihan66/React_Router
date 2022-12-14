import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <div className="App">
      <h3>React Router Dom</h3>
      <Navigation />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
