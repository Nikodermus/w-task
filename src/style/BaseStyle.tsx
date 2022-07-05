import "normalize.css";

import { createGlobalStyle } from "styled-components";

import {
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE_BASE_PX,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHT,
  SIZINGS,
  TRANSITION,
  TYPOGRAPHY_VARIANTS,
  Z_INDEX,
} from "../constants/styled.constant";
import {
  createPlainVariables,
  createSizeVariables,
} from "../utils/styled.util";

const BaseStyle = createGlobalStyle`
  :root {
    ${createSizeVariables(FONT_SIZES, "font-size")}
    ${createSizeVariables(SIZINGS, "sizing")}

    ${createPlainVariables(TYPOGRAPHY_VARIANTS, "typography")}
    ${createPlainVariables(COLORS, "color")}
    ${createPlainVariables(BORDER_RADIUS, "border-radius")}
    ${createPlainVariables(FONT_WEIGHTS, "font-weight")}
    ${createPlainVariables(LINE_HEIGHT, "line-height")}
    ${createPlainVariables(TRANSITION, "transition")}
    ${createPlainVariables(Z_INDEX, "z-index")}

    --font-size-px: ${FONT_SIZE_BASE_PX};
  }

  * {
    &::after,
    &::before,
    & {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      transition: all var(--transition-1);

      @media (prefers-reduced-motion: reduce) {
        animation: unset !important;
        transition: 0 !important;
      }
    }
  }

  canvas {
    display: none;
  }

  html {
    font-size: ${FONT_SIZE_BASE_PX}px;
  }

  body {
    font: var(--typography-body1);
    color: var(--color-black);
    overflow: hidden;
  }

  html, body, #root {
    align-items: center;
    background: var(--color-gray);
    display: flex ;
    justify-content: center;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0
  }

  img,
  picture,
  svg,
  video {
    max-width: 100%;
    object-fit: contain;
    overflow: visible;
  }

  a {
    &:visited,
    &:focus,
    & {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default BaseStyle;
