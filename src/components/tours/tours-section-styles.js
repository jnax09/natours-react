import styled from "styled-components";

const StyledToursSection = styled.section`
  background-color: ${({ theme }) => theme.palette.grey.light["1"]};
  padding: 25rem 0 15rem 0;
  margin-top: -12rem;

  .discover-btn {
    text-align: center;
    margin-top: ${({ theme }) => theme.utilities.marginTopHuge};
  }

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    padding: 20rem 0 10rem 0;
  }
`;

export default StyledToursSection;
