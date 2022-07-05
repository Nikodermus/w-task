import styled from "styled-components";

const SVG = styled.svg``;

const IconClock: React.FC = props => {
  return (
    <SVG viewBox="0 0 48 48" {...props}>
      <circle
        cx="24"
        cy="24"
        fill="none"
        r="23"
        stroke="currentcolor"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <polyline
        fill="none"
        points="24 11.84 24 24.19 30.61 30.8"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <rect width="48" height="48" fill="none" />
    </SVG>
  );
};

export default IconClock;
