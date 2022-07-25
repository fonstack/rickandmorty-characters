import styled from 'styled-components';
import { getFontSize, getSpacing } from '../../styles';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${getFontSize('h1')};
  }

  span {
    font-size: ${getFontSize('h2')};
  }

  span.quantity {
    font-weight: 700;
  }

  span.mute {
    color: var(--color-light-gray);
    margin-left: ${getSpacing(1)};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${getSpacing(6)} 0;
`;
