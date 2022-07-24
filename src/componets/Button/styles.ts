import styled from 'styled-components';
import { getSpacing } from '../../styles';

export const StyledButton = styled.button`
  padding: ${getSpacing(1.5)} ${getSpacing(4)};
  border: none;
  border-radius: 30px;
  background: var(--gradient-primary-secondary);
  font-weight: 700;
  color: inherit;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
