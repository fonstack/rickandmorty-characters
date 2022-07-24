import styled from 'styled-components';
import { getFontSize, getSpacing } from '../../styles';

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
  position: absolute;
  top: ${getSpacing(2)};
  right: ${getSpacing(2)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-medium-gray-opacity);
  width: ${getSpacing(6)};
  height: ${getSpacing(6)};
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    svg {
      stroke: var(--color-secondary-lighter);
    }
  }

  svg {
    fill: transparent;
    stroke: var(--color-light-gray);
    stroke-width: 40px;
    transition: 0.2s;

    &.active {
      animation: like 0.4s 1;
      fill: var(--color-secondary-lighter);
      stroke: var(--color-secondary-lighter);
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

export const IconTag = styled.div`
  background: var(--gradient-primary-secondary);
  font-size: ${getFontSize('large')};
  transform: translateY(50%);
  position: absolute;
  left: ${getSpacing(1.5)};
  bottom: 0;
  border-radius: 4px;
  padding: ${getSpacing(1)} ${getSpacing(1.5)};

  svg {
    width: ${getSpacing(3.5)};
    height: ${getSpacing(3.5)};
    fill: var(--color-text);
  }
`;

export const InfoContainer = styled.div`
  padding: ${getSpacing(5)} ${getSpacing(3)} ${getSpacing(2.5)} ${getSpacing(3)};

  .info-row {
    display: flex;
    justify-content: space-between;
    margin-top: ${getSpacing(2.5)};
  }
`;

export const StyledInfo = styled.div`
  p.title {
    font-size: ${getFontSize('small')};
    color: var(--color-light-gray);
    text-transform: uppercase;
  }

  p.content {
    font-size: ${getFontSize('large')};
    line-height: 1.2;

    &.status-alive,
    &.status-dead {
      font-weight: 700;
    }

    &.status-alive {
      color: green;
    }

    &.status-dead {
      color: red;
    }
  }
`;
