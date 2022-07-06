import styled from "styled-components";

import { negative } from "@/utils/styled.util";

import IconBotError from "../Icons/IconBotError";

export interface ErrorMessageProps {
  message?: string;
}

const StyledSpan = styled.span<{ message?: string }>`
  background: var(--color-red);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-red-dark);
  color: var(--color-red-dark);
  display: inline-block;
  font: var(--typography-caption);
  padding: var(--sizing-md);
  text-align: center;
`;

const StyledIcon = styled(IconBotError)`
  margin-bottom: ${negative("var(--sizing-md)")};
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "???" }) => {
  return (
    <StyledSpan>
      {message}
      <br />
      <StyledIcon></StyledIcon>
    </StyledSpan>
  );
};

export default ErrorMessage;
