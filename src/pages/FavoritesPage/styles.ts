import styled from 'styled-components';
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
