import React from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, testId }, ref) => {
  return (
    <StyledButton ref={ref} data-testid={testId} onClick={onClick}>
      {children}
    </StyledButton>
  );
});

export { Button };
