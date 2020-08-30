import styled from "styled-components";
import { rgba } from "polished";

const StyledComposition = styled.div`
  position: relative;

  .photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.4)};
    border-radius: 2px;

    position: absolute;
    z-index: 10;
    transition: all 0.2s;
    outline-offset: 2rem;

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      float: left;
      position: relative;
      width: 33.3333333333%;
      box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.2)};
    }

    &.p1 {
      left: 0;
      top: -2rem;

      @media ${({ theme }) => theme.mediaQueries.tabPort} {
        top: 0;
        transform: scale(1.2);
        z-index: 100;
      }
    }

    &.p2 {
      right: 0;
      top: 2rem;

      @media ${({ theme }) => theme.mediaQueries.tabPort} {
        top: -1rem;
        transform: scale(1.3);
      }
    }

    &.p3 {
      left: 20%;
      top: 10rem;

      @media ${({ theme }) => theme.mediaQueries.tabPort} {
        top: 1rem;
        left: 0;
        transform: scale(1.1);
      }
    }

    &:hover {
      outline: 1.5rem solid ${({ theme }) => theme.palette.primary.main};
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.5)};

      z-index: 20;
    }
  }

  &:hover &.photo:not(:hover) {
    transform: scale(0.8);
  }
`;

export default StyledComposition;
