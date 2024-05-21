import React from 'react';
import './NavBar.css';

const NavBar = ({
  tabNames = [],
  onSelect,
  selected,
}) => {
  return (
    <div className='navBar'>
      {tabNames.map((tn, i) => (
        <span
          key={`tn${i}`}
          onClick={onSelect.bind(null, tn)}
          className={`tab-${tn} ${tn === selected ? 'selected' : ""}`}
        >{tn}</span>
      ))}{" "}
    </div>
  )
}

export default NavBar;
