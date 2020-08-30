import styled from 'styled-components'

const StyledHeadingTertiary = styled.h2`
  font-size: ${({theme}) => theme.fontSize.defaultFontSize};
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: ${({theme}) => theme.utilities.marginBottomSmall};
`

export default StyledHeadingTertiary