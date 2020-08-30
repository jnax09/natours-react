import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.defaultFontSize};
  
  &:not(:last-child) {
    margin-bottom: 3rem;
  }`

export default StyledParagraph