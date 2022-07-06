import styled, { keyframes } from "styled-components";

export interface LoaderProps {
  quantity?: number;
}

const StyledWrapper = styled.div`
  display: inline-flex;
  gap: var(--sizing-sm);
`;

const animation = keyframes`
    0% {
        opacity: 0.2
    }

    30%{
        opacity: 0.6
    }

    100%{
        opacity: 1
    }
`;

const StyledPoint = styled.span<{ delay: number }>`
  animation-delay: ${({ delay }) => delay}ms;
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${animation};
  animation-timing-function: ease-in-out;
  aspect-ratio: 1 / 1;
  background: var(--color-gray);
  border-radius: var(--border-radius-round);
  width: var(--sizing-md);
`;

const Loader: React.FC<LoaderProps> = ({ quantity = 3, ...props }) => {
  return (
    <StyledWrapper
      {...props}
      aria-busy="true"
      aria-valuetext="Loading..."
      role="progressbar"
    >
      {Array.from({ length: quantity }).map((_, index) => (
        <StyledPoint
          key={index}
          aria-hidden="true"
          delay={(index + 1) * 300}
        ></StyledPoint>
      ))}
    </StyledWrapper>
  );
};

export default Loader;
