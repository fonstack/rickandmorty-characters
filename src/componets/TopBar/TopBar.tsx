import { Link } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledNav, Wrapper } from './styles';
import { Button } from '../Button/Button';
import { Paths } from '../../navigation';
import { ReactComponent as Logo } from '../../assets/images/logo-api.svg';

const portfolioLink = 'https://fonstack.dev';

const TopBar = () => {
  return (
    <StyledHeader className="max-width-wrapper" data-testid="topbar">
      <Wrapper>
        <Link to={Paths.MARKETPLACE}>
          <Logo />
        </Link>
        <StyledNav>
          <StyledLink to={Paths.MARKETPLACE}>Marketplace</StyledLink>
          <StyledLink to={Paths.FAVORITES}>Favorites</StyledLink>
          <Button onClick={() => window.open(portfolioLink, '_blank')}>Go to my Portoflio</Button>
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  );
};

export { TopBar };
