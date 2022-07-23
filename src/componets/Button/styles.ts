import styled from 'styled-components';
import { getSpacing } from '../../styles';

export const StyledButton = styled.button`
  padding: ${getSpacing(1.5)} ${getSpacing(4)};
  border: none;
  border-radius: 30px;
  background-color: var(--color-primary);
  font-weight: 700;
  color: inherit;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--color-primary-darker);
  }
`;
