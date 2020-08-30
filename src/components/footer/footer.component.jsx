/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import StyledFooter from "./footer.styles";
import LogoGreen2x from "../../img/logo-green-2x.png";
import Grid from "../commons/grid/grid.component";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-box">
        <img src={LogoGreen2x} alt="Full logo" className="logo" />
      </div>
      <Grid>
        <div className="col-1-of-2">
          <div className="navigation">
            <ul className="list">
              <li className="item">
                <a href="#" className="link">
                  Company
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Contact us
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Careers
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Privacy Policy
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="copyright">
            Built by{" "}
            <a href="#" className="link">
              Jonas Singbo
            </a>{" "}
            for his css training. Copyright &copy; by Jonas Singbo
          </p>
        </div>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
