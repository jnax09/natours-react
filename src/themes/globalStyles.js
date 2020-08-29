import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /*Universal Reset*/
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    // root font size: 1rem = 10px
    html {
      // defines what 1rem is
      font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
      
      @media (max-width: 75em) { // width < 1200px
        font-size: 56.25%; // 1rem = 9px; 8/16 = 56.25%
      }
    
      @media (max-width: 56.25em) { // width < 900px?
        font-size: 50%; // 1rem = 8px; 8/16 = 50%
      }
      
      @media (min-width: 112.5em) {
        font-size: 75%; // 1rem = 12px; 12/16 = 75%
      }
    }
    
    body {
      box-sizing: border-box;
      padding: 3rem;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      line-height: 1.7;
      color: #777777;
      
      @media (max-width: 56.25em) { // width < 900px?
        padding: 0;
      }
    }
`

export default GlobalStyle;