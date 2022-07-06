import IconWrapper from "./IconWrapper";

const IconClock: React.FC = props => {
  return (
    <IconWrapper
      {...props}
      desc="Analogous clock representation"
      name="Clock"
      viewBox="0 0 48 48"
    >
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
    </IconWrapper>
  );
};

export default IconClock;
