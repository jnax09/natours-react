import styled from "styled-components";
import Nat4 from "../../img/nat-4.jpg";
import { rgba, backgrounds } from "polished";

const StyledFeaturesSection = styled.section`
  position: relative;
  padding: 20rem 0;
  background-size: cover;

  ${({ theme }) =>
    backgrounds(
      `linear-gradient(${rgba(theme.palette.primary.light, 0.8)}, 
      ${rgba(theme.palette.primary.dark, 0.8)})`,
      `url(${Nat4})`,
      "center no-repeat"
    )};

  margin-top: -12rem;
  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    padding: 10rem 0;
  }
`;

export default StyledFeaturesSection;
