import styled from 'styled-components';
import { getSpacing } from '../../styles';

export const StyledCharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
  grid-gap: ${getSpacing(3)};
  justify-content: center;
  margin-top: ${getSpacing(6)};

  @media (max-width: 895px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 220px));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 300px));
  }
`;
