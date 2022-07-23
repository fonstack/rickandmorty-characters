import { StyledButton } from './styles';

type ButtonProps = {
  children: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
