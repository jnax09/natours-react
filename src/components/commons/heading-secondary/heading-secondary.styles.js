import styled from "styled-components";
import { rgba } from "polished";

const StyledHeadingSecondary = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.primary.light},
    ${({ theme }) => theme.palette.primary.dark}
  );
  display: inline-block;

  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.2s;
  letter-spacing: 0.2rem;

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.phone} {
    font-size: 2.5rem;
  }

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    box-shadow: 0.5rem 1rem 2rem
      ${({ theme }) => rgba(theme.palette.black, 0.2)};
  }
`;

export default StyledHeadingSecondary;
