import styled, { css } from 'styled-components';
import { getFontSize, getSpacing } from '../../styles';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .main-title {
    display: flex;
    align-items: center;

    h1 {
      font-size: ${getFontSize('h1')};
    }

    &__quantity-container {
      font-size: ${getFontSize('large')};
      margin-left: ${getSpacing(5)};

      .quantity {
        font-weight: 700;
      }

      .mute {
        color: var(--color-light-gray);
        margin-left: ${getSpacing(1)};
      }
    }
  }

  p {
    font-size: ${getFontSize('h2')};
    color: var(--color-light-gray);
  }
`;

export const Badge = styled.div`
  padding: ${getSpacing(1)} ${getSpacing(3)};
  background-color: var(--color-gray);
  border-radius: 50px;
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

  @media (max-width: 900px) {
    padding: ${getSpacing(1.5)} ${getSpacing(2)};
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
