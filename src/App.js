import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Blogs2 from './Pages/Blogs2';
import Blog2 from './Pages/Blog2';
import UseSearchParamsPage from './Pages/UseSearchParamsPage';

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
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='/blogs2' element={<Blogs2 />} />
        <Route path='/blogs2/:title' element={<Blog2 />} />
        <Route path='/usesearch' element={<UseSearchParamsPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
