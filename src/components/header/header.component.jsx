import React from 'react'
import HeadingPrimary from "../commons/heading-primary/heading-primary.component";
import StyledHeader from "./header.styles";
import LogoWhite from '../../img/logo-white.png'
import Button from "../commons/button/button.component";

const Header = () => {
    return (
        <StyledHeader>
            <div className="logo-box">
                <img src={LogoWhite} alt="Logo" className="logo" />
            </div>
            <div className="text-box">
                <HeadingPrimary main="Outdoors" sub="is where life happens">Natours</HeadingPrimary>
                <Button href="#" btn white animated>Discover our tours</Button>
            </div>
        </StyledHeader>
    )
}

export default Header