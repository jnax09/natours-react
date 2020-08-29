import styled from "styled-components";
import Hero from '../../img/hero.jpg'

const StyledHeader = styled.header`
  position: relative;
  height: 95vh;
  background-size: cover;
  background-position: top;

  background-image: url(${Hero});  
  &:before {
    // Pseudo element will only render if it has a content property
    content: '';
    // Overlay should occupy the full width and height of parent image container
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // Overlay background-color
    background: linear-gradient(to right bottom, ${({theme}) => theme.palette.primary.light}, ${({theme}) => theme.palette.primary.dark});
    // Overlay opacity, else overlay won't be transparent and show the image
    opacity: .8;
  }

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  @media ${({theme}) => theme.mediaQueries.phone} {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  }

  .logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  .logo {
    height: 3.5rem;
  }

  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }`

export default StyledHeader