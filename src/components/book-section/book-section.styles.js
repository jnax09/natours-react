import styled from "styled-components";

const StyledBookSection = styled.div`
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.palette.primary.light},
    ${({ theme }) => theme.palette.primary.dark}
  );
`;

export default StyledBookSection;
