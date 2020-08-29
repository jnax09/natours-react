import styled, {css} from "styled-components";

const StyledButton = styled.a`
${({btn}) => btn && css`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .2s;
    position: relative;
    font-size: ${({theme}) => theme.fontSize.defaultFontSize};

    // Change for the <button> element
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(${({theme}) => theme.palette.black},.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(${({theme}) => theme.palette.black}, .2);
  }

  &::after {
    content: "";
    display: inline-block;
    height:100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
`}

${({white}) => white && css`
    background-color: ${({theme}) => theme.palette.white};
    color: ${({theme}) => theme.palette.grey.dark["1"]};

    &::after {
      background-color: ${({theme}) => theme.palette.white};
    }
`}
  
${({green}) => green && css`
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.white};

    &::after {
      background-color: ${({theme}) => theme.palette.primary.main};
    }
`}

${({animated}) => animated && css`
    animation: ${({theme}) => theme.animations.moveInBottom} .5s ease-out .75s;
    animation-fill-mode: backwards;
`}

${({btnText}) => btnText && css`
  &:link,
  &:visited {
    font-size: ${({theme}) => theme.fontSize.defaultFontSize};
    color: ${({theme}) => theme.palette.primary.main};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${({theme}) => theme.palette.primary.main};
    padding: 3px;
    transition: all .2s;
  }

  &:hover {
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.white};
    box-shadow: 0 1rem 2rem rgba(${({theme}) => theme.palette.black}, .15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 .5rem 1rem rgba(${({theme}) => theme.palette.black}, .15);
    transform: translateY(0);
  }
`}
`

export default StyledButton