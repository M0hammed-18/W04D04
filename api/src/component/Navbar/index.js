import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import { useHistory } from "react-router";
import "./style.css";

const Navbar = () => {
  const history = useHistory();
  const go = () => {
    history.goBack();
  };
  return (
    <div className="nav">
      <ul>
        <li>
          <IoReturnUpBack onClick={go} />
        </li>
        <li>
          <Link to="/" className="navlink">
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="navlink">
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link to="/Cards" className="navlink">
            {" "}
            Cards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
