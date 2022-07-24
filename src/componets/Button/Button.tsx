import { StyledButton } from './styles';
import { ButtonProps } from './types';

const Button = ({ children, onClick, testId }: ButtonProps) => {
  return (
    <StyledButton data-testid={testId} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export { Button };
