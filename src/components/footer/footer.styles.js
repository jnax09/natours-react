import styled from "styled-components";
import { rgba } from "polished";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.grey.dark["3"]};
  padding: 10rem 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.grey.light["1"]};

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    padding: 8rem 0;
  }

  .logo-box {
    text-align: center;
    margin-bottom: 8rem;

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      margin-bottom: 6rem;
    }

    .logo {
      width: 15rem;
      height: auto;
    }
  }

  .navigation {
    border-top: 1px solid ${({ theme }) => theme.palette.grey.dark["1"]};
    padding: 2rem;
    display: inline-block;

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      width: 100%;
      text-align: center;
    }

    .list {
      list-style: none;

      .item {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }
  }

  .link {
    &:link,
    &:visited {
      color: ${({ theme }) => theme.palette.grey.light["1"]};
      background-color: ${({ theme }) => theme.palette.grey.dark["3"]};
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.palette.primary.main};
      box-shadow: 0 1rem 2rem ${({ theme }) => rgba(theme.palette.black, 0.4)};
      transform: rotate(5deg) scale(1.3);
    }
  }

  .copyright {
    width: 80%;
    border-top: 1px solid ${({ theme }) => theme.palette.grey.dark["1"]};
    padding: 2rem;
    float: right;

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      width: 100%;
      float: none;
    }
  }
`;

export default StyledFooter;
