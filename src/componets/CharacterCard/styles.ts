import styled from 'styled-components';
import { getSpacing } from '../../styles';

export const StyledCharacterCard = styled.div`
  overflow: hidden;
  background-color: var(--color-medium-gray);
  border-radius: ${getSpacing(2.5)};
`;

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const FavoriteFlag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-medium-gray-opacity);
  position: absolute;
  top: ${getSpacing(2)};
  right: ${getSpacing(2)};
  width: ${getSpacing(6)};
  height: ${getSpacing(6)};
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    svg {
      stroke: var(--color-primary-lighter);
    }
  }

  svg {
    fill: transparent;
    stroke: var(--color-light-gray);
    stroke-width: 2px;
    transition: 0.2s;

    &.active {
      animation: like 0.4s 1;
      fill: var(--color-primary-lighter);
      stroke: var(--color-primary-lighter);
    }
  }

  @keyframes like {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

export const InfoContainer = styled.div`
  padding: ${getSpacing(4)};
`;
