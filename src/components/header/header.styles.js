import styled from "styled-components";
import Hero from "../../img/hero.jpg";
import { rgba, backgrounds } from "polished";

const StyledHeader = styled.header`
  position: relative;
  height: 95vh;
  background-size: cover;

  ${({ theme }) =>
    backgrounds(
      `linear-gradient(${rgba(theme.palette.primary.light, 0.8)}, 
      ${rgba(theme.palette.primary.dark, 0.8)})`,
      `url(${Hero})`,
      "top no-repeat"
    )};

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  @media ${({ theme }) => theme.mediaQueries.phone} {
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
  }
`;

export default StyledHeader;
