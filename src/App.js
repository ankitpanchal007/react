import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <>
     
        <Router>
                    
          {/* <nav>
            <Link to='/'> HomePage</Link>
            <br></br>
            <Link to='/About'> AboutPage</Link>
          </nav> */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/product" element={<product />} >
            <Route path="prod1" element={<prod1 />} />
            <Route path="prod2" element={<prod2 />} />
            </Route>
          </Routes>
        </Router>
          
      </>
    )
  }
}

export default App;
