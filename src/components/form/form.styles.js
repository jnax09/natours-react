import styled from "styled-components";
import { rgba } from "polished";

const StyledForm = styled.div`
  width: 50%;
  padding: 6rem;

  @media ${({ theme }) => theme.mediaQueries.tabLand} {
    width: 65%;
  }

  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    width: 100%;
  }

  form {
    .u-margin-bottom-medium {
      margin-bottom: ${({ theme }) => theme.utilities.marginBottomMedium};
    }

    .group:not(:last-child) {
      margin-bottom: 2rem;

      //-------------------------------------------------------INPUT TEXT---------------------------------------------------------

      .input {
        font-size: 1.5rem;
        font-family: inherit;
        color: inherit;
        padding: 1.5rem 2rem;
        border-radius: 2px;
        background-color: rgba(${({ theme }) => theme.palette.white}, 0.5);
        border: none;
        border-bottom: 3px solid transparent;
        width: 90%;
        display: block;
        transition: all 0.3s;

        @media ${({ theme }) => theme.mediaQueries.tabPort} {
          width: 100%;
        }

        &:focus {
          outline: none;
          box-shadow: 0 1rem 2rem
            ${({ theme }) => rgba(theme.palette.black, 0.1)};
          border-bottom: 3px solid ${({ theme }) => theme.palette.primary.main};

          &:invalid {
            border-bottom: 3px solid
              ${({ theme }) => theme.palette.secondary.dark};
          }
        }

        &::-webkit-input-placeholder {
          color: ${({ theme }) => theme.palette.grey.dark["2"]};
        }
      }

      .label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: 0.7rem;
        display: block;
        transition: all 0.3s;
      }

      .input:placeholder-shown + .label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
      }

      //-------------------------------------------------------RADIO BUTTONS---------------------------------------------------------
      .radio-group {
        width: 48%;
        display: inline-block;

        @media ${({ theme }) => theme.mediaQueries.tabPort} {
          width: 100%;
          margin-bottom: 1rem;
        }

        .radio-input {
          display: none;
        }

        .radio-label {
          font-size: ${({ theme }) => theme.fontSize.defaultFontSize};
          cursor: pointer;
          position: relative;
          padding-left: 5rem;

          .radio-button {
            height: 3rem;
            width: 3rem;
            border: 5px solid ${({ theme }) => theme.palette.primary.main};
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            left: 0;
            top: -0.3rem;

            &::after {
              content: "";
              display: block;
              height: 1.3rem;
              width: 1.3rem;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: ${({ theme }) => theme.palette.primary.main};
              opacity: 0;
              transition: opacity 0.2s;
            }
          }
        }

        .radio-input:checked ~ .radio-label .radio-button::after {
          opacity: 1;
        }
      }
    }
  }
`;

export default StyledForm;
