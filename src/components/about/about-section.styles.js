import styled from "styled-components";

const StyledAboutSection = styled.section`
  background-color: ${({theme}) => theme.palette.grey.light["1"]};
  padding: 25rem 0;
  margin-top: -20vh;
  
  @media ${({theme}) => theme.mediaQueries.tabPort} {
      padding: 20rem 0;
  }
}`

export default StyledAboutSection