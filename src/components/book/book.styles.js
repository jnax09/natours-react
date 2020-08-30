import styled from "styled-components";
import Nat10 from "../../img/nat-10.jpg";
import { rgba, backgrounds } from "polished";

const StyledBook = styled.div`
  ${({ theme }) =>
    backgrounds(
      `linear-gradient(105deg,
      ${rgba(theme.palette.white, 0.9)} 0%, 
      ${rgba(theme.palette.white, 0.9)} 50%,
      transparent 50%)`,
      `url(${Nat10})`,
      "center no-repeat"
    )};
  background-size: 100%;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.25)};

  @media ${({ theme }) => theme.mediaQueries.tabLand} {
    ${({ theme }) =>
      backgrounds(
        `linear-gradient(105deg,
      ${rgba(theme.palette.white, 0.9)} 0%, 
      ${rgba(theme.palette.white, 0.9)} 65%,
      transparent 65%)`,
        `url(${Nat10})`,
        "center no-repeat"
      )};

    background-size: cover;
  }

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    ${({ theme }) =>
      backgrounds(
        `linear-gradient(105deg,
      ${rgba(theme.palette.white, 0.9)} 0%, 
      ${rgba(theme.palette.white, 0.9)} 100%)`,
        `url(${Nat10})`,
        "center no-repeat"
      )};

    background-size: cover;
  }
`;

export default StyledBook;
