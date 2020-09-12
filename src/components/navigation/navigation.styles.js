import styled from "styled-components";
import { rgba, backgrounds } from "polished";

const StyledNavigation = styled.div`
  .checkbox {
    display: none;
  }

  .button {
    background-color: ${({ theme }) => theme.palette.white};
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;

    box-shadow: 0 1rem 3rem ${({ theme }) => rgba(theme.palette.black, 0.1)};
    text-align: center;
    cursor: pointer;

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      top: 4.5rem;
      right: 4.5rem;
    }

    @media ${({ theme }) => theme.mediaQueries.phone} {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  .background {
    height: 6rem;
    width: 6rem;
    border-radius: 60%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;

    ${({ theme }) =>
      backgrounds(
        `radial-gradient(${rgba(theme.palette.primary.light, 1)}, 
      ${rgba(theme.palette.primary.dark, 1)})`
      )};

    //background-image: radial-gradient(
    //  $color-primary-light,
    //  $color-primary-dark
    //);

    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.7, 1);

    @media ${({ theme }) => theme.mediaQueries.tabPort} {
      top: 4.5rem;
      right: 4.5rem;
    }

    @media ${({ theme }) => theme.mediaQueries.phone} {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;

    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    .list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
      width: 100%;

      .item {
        margin: 1rem;

        .link {
          &:link,
          &:visited {
            font-size: 3rem;
            font-weight: 300;
            padding: 1rem 2rem;
            color: ${({ theme }) => theme.palette.white};
            text-decoration: none;
            text-transform: uppercase;

            ${({ theme }) =>
              backgrounds(
                `linear-gradient(120deg, 
                transparent 0%,
                transparent 50%,
                ${theme.palette.white} 50%)`
              )};

            background-size: 230%;
            transition: all 0.4s;
            display: inline-block;

            span {
              margin-right: 1.5rem;
              display: inline-block;
            }
          }

          &:active,
          &:hover {
            background-position: 100%;
            color: ${({ theme }) => theme.palette.primary.main};
            transform: translateX(1rem);
          }
        }
      }
    }
  }

  //FUNCTIONALITY
  .checkbox:checked ~ .background {
    transform: scale(80);
  }

  .checkbox:checked ~ nav {
    opacity: 1;
    width: 100%;
  }

  // ICON
  .icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.grey.dark["3"]};
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  .button:hover .icon::before {
    top: -1rem;
  }

  .button:hover .icon::after {
    top: 1rem;
  }

  .checkbox:checked + .button .icon {
    background-color: transparent;
  }

  .checkbox:checked + .button .icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  .checkbox:checked + .button .icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

export default StyledNavigation;
