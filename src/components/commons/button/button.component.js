import React from 'react'
import StyledButton from "./button.styles";

const Button = ({href, btnText, btn, white, green, animated, children}) => {
    return (
        <StyledButton href={href} btnText={btnText} btn={btn} white={white} green={green} animated={animated}>{children}</StyledButton>
    )
}

export default Button