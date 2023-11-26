import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AddTodo from '../AddTodo/AddTodo';


import './Home.css';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <Router>
      <div className="main-body">
        <AddTodo />
        <nav>
          <ul className='navBar'>
            <li><Link to="/important">Important </Link></li>
            
            <li><Link to="/completed">Completed </Link></li>
            <li><Link to="/all">All Tasks</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/*" element={<Slider />} />
          <Route path="/" element={<Navigate to="/all" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;