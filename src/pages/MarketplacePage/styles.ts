import styled, { css } from 'styled-components';
import { getFontSize, getSpacing } from '../../styles';

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: ${getFontSize('h1')};
  }

  p {
    margin-left: ${getSpacing(4)};

    span.mute {
      color: var(--color-light-gray);
    }
  }
`;

export const StyledFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-medium-gray);
  border-radius: 50px;
  padding: ${getSpacing(1)} ${getSpacing(2)};
  margin-top: ${getSpacing(6)};
`;

export const StyledFilterOption = styled.div<{ active: boolean }>`
  width: 100%;
  margin: ${getSpacing(1)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: var(--color-gray);
  padding: ${getSpacing(2)} ${getSpacing(2)};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  ${({ active }) =>
    active &&
    css`
      background: var(--gradient-primary-secondary);

      &:hover {
        opacity: 1;
      }
    `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${getSpacing(6)} 0;
`;
