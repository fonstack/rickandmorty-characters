import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getFontSize, getSpacing } from '../../styles';

export const Wrapper = styled.div`
  padding: ${getSpacing(4)} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 ${getSpacing(4)};

    @media (max-width: 680px) {
      margin: 0 ${getSpacing(2)};
    }

    &:last-child {
      margin-right: 0;
    }
  }

  button {
    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${getFontSize('large')};
  font-weight: 700;

  &:not(.active) {
    color: var(--color-light-gray);
    font-weight: 500;
  }

  @media (max-width: 680px) {
    font-size: ${getFontSize('medium')};
  }
`;
