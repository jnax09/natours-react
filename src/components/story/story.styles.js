import styled from "styled-components";
import { rgba } from "polished";

const StyledStory = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem ${({ theme }) => rgba(theme.palette.black, 0.3)};

  border-radius: 3px;
  padding: 6rem 6rem 6rem 9rem;

  font-size: ${({ theme }) => theme.fontSize.defaultFontSize};
  transform: skewX(-12deg);

  background-color: rgba(${({ theme }) => theme.palette.white}, 0.6);

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    width: 100%;
    padding: 4rem 4rem 4rem 7rem;
  }

  @media ${({ theme }) => theme.mediaQueries.phone} {
    transform: skewX(0);
  }

  .shape {
    width: 15rem;
    height: 15rem;

    float: left;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);

    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);

    position: relative;

    @media ${({ theme }) => theme.mediaQueries.phone} {
      transform: translateX(-3rem) skewX(0);
    }

    img {
      height: 100%;
      transform: translateX(-4rem) scale(1.4);
      backface-visibility: hidden;
      transition: all 0.5s;
    }

    figcaption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      color: ${({ theme }) => theme.palette.white};
      text-transform: uppercase;
      font-size: 1.7rem;
      text-align: center;
      opacity: 0;
      transition: all 0.5s;
      backface-visibility: hidden;
    }
  }

  .text {
    transform: skewX(12deg);

    @media ${({ theme }) => theme.mediaQueries.phone} {
      transform: skewX(0);
    }
  }

  &:hover figcaption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }
`;

export default StyledStory;
