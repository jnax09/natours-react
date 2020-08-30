import styled from "styled-components";
import { rgba } from "polished";
import Nat5 from "../../img/nat-5.jpg";
import Nat6 from "../../img/nat-6.jpg";
import Nat7 from "../../img/nat-7.jpg";

const StyledCard = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;

  .side {
    font-size: 2rem;
    height: 52rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.15)};

    &.front {
      background-color: ${({ theme }) => theme.palette.white};
    }

    &.back {
      transform: rotateY(180deg);

      &.b1 {
        background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => theme.palette.secondary.light},
          ${({ theme }) => theme.palette.secondary.dark}
        );
      }
      &.b2 {
        background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => theme.palette.primary.light},
          ${({ theme }) => theme.palette.primary.dark}
        );
      }
      &.b3 {
        background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => theme.palette.tertiary.light},
          ${({ theme }) => theme.palette.tertiary.dark}
        );
      }
    }
  }

  &:hover .front {
    transform: rotateY(-180deg);
  }

  &:hover .back {
    transform: rotateY(0);
  }

  // FRONT SIDE STYLING
  .picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    &.p1 {
      background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => theme.palette.secondary.light},
          ${({ theme }) => theme.palette.secondary.dark}
        ),
        url(${Nat5});
    }
    &.p2 {
      background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => theme.palette.primary.light},
          ${({ theme }) => theme.palette.primary.dark}
        ),
        url(${Nat6});
    }
    &.p3 {
      background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => theme.palette.tertiary.light},
          ${({ theme }) => theme.palette.tertiary.dark}
        ),
        url(${Nat7});
    }
  }

  .heading {
    font-size: 2.8rem;
    font-weight: 200;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.white};

    position: absolute;
    text-align: right;
    top: 12rem;
    right: 2rem;
    width: 75%;

    span {
      padding: 1rem 1.5rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;

      &.sp1 {
        background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => rgba(theme.palette.secondary.light, 0.85)},
          ${({ theme }) => rgba(theme.palette.secondary.dark, 0.85)}
        );
      }

      &.sp2 {
        background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => rgba(theme.palette.primary.light, 0.85)},
          ${({ theme }) => rgba(theme.palette.primary.dark, 0.85)}
        );
      }

      &.sp3 {
        background-image: linear-gradient(
          to right bottom,
          ${({ theme }) => rgba(theme.palette.tertiary.light, 0.85)},
          ${({ theme }) => rgba(theme.palette.tertiary.dark, 0.85)}
        );
      }
    }
  }

  .details {
    padding: 3rem;

    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;

      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid
            ${({ theme }) => theme.palette.grey.light["2"]};
        }
      }
    }
  }

  // BACK SIDE STYLING
  .cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;

    .price-box {
      text-align: center;
      color: ${({ theme }) => theme.palette.white};
      margin-bottom: 8rem;

      .price-only {
        font-size: 1.4rem;
        text-transform: uppercase;
      }

      .price-value {
        font-size: 6rem;
        font-weight: 100;
      }
    }
  }

  // RESPONSIVENESS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  @media ${({ theme }) => theme.mediaQueries.tabPort} {
    height: auto;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: 0 1.5rem 4rem ${({ theme }) => rgba(theme.palette.black, 0.15)};

    .side {
      height: auto;
      position: relative;
      box-shadow: none;

      &.back {
        transform: rotateY(0);
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
      }
    }

    &:hover .front {
      transform: rotateY(0);
    }

    .details {
      padding: 0 1rem;
    }

    .cta {
      position: relative;
      top: 0%;
      left: 0%;
      transform: translate(0);
      width: 100%;
      padding: 7rem 4rem 4rem 4rem;

      .price-box {
        margin-bottom: 3rem;

        .price-value {
          font-size: 4rem;
        }
      }
    }
  }
`;

export default StyledCard;
