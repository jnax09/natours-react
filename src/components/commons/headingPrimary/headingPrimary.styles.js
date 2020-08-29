import styled from "styled-components";

const StyledHeading = styled.h1`
  color: ${({theme}) => theme.palette.white};
  text-transform: uppercase;

  backface-visibility: hidden;
  margin-bottom: 6rem;

  span.main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
    animation-name: ${({theme}) => theme.animations.moveInLeft};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    
    @media (${({theme}) => theme.mediaQueries.phone}) {
      letter-spacing: 1rem;
      font-size: 5rem;
    }
  }

  span.sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;

    animation: ${({theme}) => theme.animations.moveInRight} 1s ease-out;
    
    @media ${({theme}) => theme.mediaQueries.phone} {
      letter-spacing: .5rem;
      font-size: 5rem;
    }
  }`

export default StyledHeading