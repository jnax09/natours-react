import React from 'react'
import StyledHeading from "./heading-primary.styles";

const HeadingPrimary = ({main, sub}) => {
    return (
        <StyledHeading>
            <span className="main">{main}</span>
            <span className="sub">{sub}</span>
        </StyledHeading>
    )
}

export default HeadingPrimary