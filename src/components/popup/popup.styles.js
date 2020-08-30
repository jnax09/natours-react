import styled from "styled-components";
import { rgba } from "polished";

const StyledPopup = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => rgba(theme.palette.black, 0.8)};
  z-index: 9999;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  .content {
    ${({ theme }) => theme.mixins.absCenter};
    width: 75%;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: 0 2rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.2)};
    border-radius: 3px;
    display: table;
    overflow: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25);
    transition: all 0.5s 0.2s;

    .left {
      width: 33.333333%;
      display: table-cell;

      img {
        display: block;
        width: 100%;
      }
    }

    .right {
      width: 66.66666%;
      display: table-cell;
      vertical-align: middle;
      padding: 3rem 5rem;

      .text {
        font-size: 1.4rem;
        margin-bottom: 4rem;

        column-count: 2;
        column-gap: 4rem; // 1em = 14px
        column-rule: 1px solid ${({ theme }) => theme.palette.grey.light["2"]};

        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
      }

      .close {
        &:link,
        &:visited {
          color: ${({ theme }) => theme.palette.grey.dark["1"]};
          position: absolute;
          top: 2.5rem;
          right: 2.5rem;
          font-size: 3rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s;
          line-height: 1;
        }

        &:hover {
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }

  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target .content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default StyledPopup;
