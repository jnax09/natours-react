import React from 'react'
import StyledHeadingContainer from "./heading-container.styles";

const HeadingContainer = ({children}) => {
    return (
        <StyledHeadingContainer>{children}</StyledHeadingContainer>
    )
}

export default HeadingContainer