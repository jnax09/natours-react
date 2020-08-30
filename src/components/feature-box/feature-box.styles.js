import styled from "styled-components";
import { rgba } from "polished";

const StyledFeatureBox = styled.div`
  background: ${({ theme }) => rgba(theme.palette.white, 0.8)};
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.15)};
  transition: all 0.3s;

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    padding: 2rem;
  }

  .icon {
    font-size: 6rem;
    margin-bottom: 0.5rem;

    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.primary.light},
      ${({ theme }) => theme.palette.primary.dark}
    );
    display: inline-block;

    -webkit-background-clip: text;
    color: transparent;

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      margin-bottom: 0;
    }
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }

  .text {
  }
`;

export default StyledFeatureBox;
