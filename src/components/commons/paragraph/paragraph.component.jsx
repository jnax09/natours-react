import React from 'react'
import StyledParagraph from "./paragraph.styles";

const Paragraph = ({children}) => {
    return (
        <StyledParagraph>{children}</StyledParagraph>
    )
}

export default Paragraph