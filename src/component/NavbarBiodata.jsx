import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarBiodata = () => {
  return (
    <div className="container" style={{ width: '100%', position: 'fixed', top: '0', padding: '10px 200px', backgroundColor: 'gray' }}>
      <div className="ui secondary menu">
        <NavLink to="/" className="item" style={{ color: 'white' }}>
          List Biodata
        </NavLink>
        <NavLink to="/add" className="item" style={{ color: 'white' }}>
          Add Biodata
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarBiodata;
