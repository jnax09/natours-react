import styled from "styled-components";

const GridLayout = styled.div`
    max-width: ${({theme}) => theme.grid.width};
    margin: 0 auto;
    
    @media ${({theme}) => theme.mediaQueries.tabPort} {
        max-width: 50rem;
        padding: 0;
    }
    
    &:not(:last-child) {
        margin-bottom: ${({theme}) => theme.grid.gutterVertical};
        
        @media ${({theme}) => theme.mediaQueries.tabPort} {
          margin-bottom: ${({theme}) => theme.grid.gutterVerticalSmall};
        }
    }
    
    ${({theme}) => theme.mixins.clearFix()}
    
    [class^="col-"] {
        float: left;
        
        &:not(:last-child) {
              margin-right: ${({theme}) => theme.grid.gutterHorizontal};
              
              @media ${({theme}) => theme.mediaQueries.tabPort} {
                margin-right: 0;
                margin-bottom: ${({theme}) => theme.grid.gutterVerticalSmall};
              }
        }

        @media ${({theme}) => theme.mediaQueries.tabPort} {
            width: 100% !important;
        }
    }

  .col-1-of-2 {
    width: calc((100% - ${({theme}) => theme.grid.gutterHorizontal})/2);
  }

  .col-1-of-3 {
    width: calc((100% - 2 * ${({theme}) => theme.grid.gutterHorizontal})/3);
  }

  .col-2-of-3 {
    width: calc(2*((100% - 2 * ${({theme}) => theme.grid.gutterHorizontal})/3) + ${({theme}) => theme.grid.gutterHorizontal});
  }

  .col-1-of-4 {
    width: calc((100% - 3 * ${({theme}) => theme.grid.gutterHorizontal})/4);
  }

  .col-2-of-4 {
    width: calc(2*((100% - 3 * ${({theme}) => theme.grid.gutterHorizontal})/4) + ${({theme}) => theme.grid.gutterHorizontal});
  }

  .col-3-of-4 {
    width: calc(3*((100% - 3 * ${({theme}) => theme.grid.gutterHorizontal})/4) + 2 * ${({theme}) => theme.grid.gutterHorizontal});
  }`

export default GridLayout