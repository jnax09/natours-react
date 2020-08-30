import styled from "styled-components";

const StyledStoriesSection = styled.section`
  position: relative;
  padding: 15rem 0;

  .read-btn {
    text-align: center;
    margin-top: ${({ theme }) => theme.utilities.marginTopHuge};
  }

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    padding: 10rem 0;
  }
`;

export default StyledStoriesSection;
