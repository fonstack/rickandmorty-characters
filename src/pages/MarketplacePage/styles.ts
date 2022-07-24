import styled from 'styled-components';
import { Button } from '../../componets/Button/Button';
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${getSpacing(6)} 0;
`;
