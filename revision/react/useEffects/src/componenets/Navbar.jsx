import "./Navbar.css"
import {useEffect} from 'react';

const Navbar = ({color}) => {
useEffect(() => {
  alert("color changed");
}, [color]);


  return <div><nav style={{ backgroundColor: color }} className="Navbar">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact </li>
        <li>{color} </li>
        
    </ul>
    </nav ></div>;
};
export default Navbar;




