import {keyframes} from "styled-components";

export default {
    moveInLeft: keyframes`
      0% {
        opacity: 0;
        transform: translateX(-10rem);
      }
      80%{
        transform: translateX(1rem);
      }
      100% {
        opacity: 1;
        transform: translate(0);
      }`,

    moveInRight: keyframes`
      0% {
        opacity: 0;
        transform: translateX(10rem);
      }
      80%{
        transform: translateX(-1rem);
      }
      100% {
        opacity: 1;
        transform: translate(0);
      }`,

    moveInBottom: keyframes`
      0% {
        opacity: 0;
        transform: translateY(3rem);
      }
      100% {
        opacity: 1;
        transform: translate(0);
      }`
}