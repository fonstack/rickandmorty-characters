import { Link } from 'react-router-dom';
import { Paths } from '../../navigation';
import { StyledLink, StyledNav, Wrapper } from './styles';
import { ReactComponent as Logo } from '../../assets/images/logo-api.svg';
import { Button } from '../Button/Button';

const portfolioLink = 'https://fonstack.dev';

const TopBar = () => {
  return (
    <header className="max-width-wrapper">
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
    </header>
  );
};

export { TopBar };
