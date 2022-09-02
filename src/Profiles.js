import React from 'react';
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/pjm"
            style={({isActive}) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'red' : 'white',
              fontWeight: isActive ? 'bold' : '',
              fontSize: isActive ? '20px' : '',
            })}
          >
            pjm
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/psy"
            style={({isActive}) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'red' : 'white',
              fontWeight: isActive ? 'bold' : '',
              fontSize: isActive ? '20px' : '',
            })}
          >
            psy
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={'유저를 선택해 주세요'} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
