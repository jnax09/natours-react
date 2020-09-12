/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import StyledNavigation from "./navigation.styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <input type="checkbox" className="checkbox" id="navi-toggle" />

      <label htmlFor="navi-toggle" className="button">
        <span className="icon">&nbsp;</span>
      </label>

      <div className="background">&nbsp;</div>

      <nav className="nav">
        <ul className="list">
          <li className="item">
            <a href="#" className="link">
              <span>01</span>About Natours
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              <span>02</span>Your benefits
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              <span>03</span>Popular tours
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              <span>04</span>Stories
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
