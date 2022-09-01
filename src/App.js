import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} exact={true} />
      </Routes>
    </div>
  );
}

export default App;
