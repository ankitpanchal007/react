import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <nav>
            <Link to='/'> HomePage</Link>
            <br></br>
            <Link to='/About'> AboutPage</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>

      </React.Fragment>
    )
  }
}

export default App;
