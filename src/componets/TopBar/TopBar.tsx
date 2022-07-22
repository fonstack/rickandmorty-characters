import { Link } from 'react-router-dom';
import { Paths } from '../../navigation';

const TopBar = () => {
  return (
    <>
      <h3>Topbar</h3>
      <Link to={Paths.MARKETPLACE}>MARKETPLACE</Link>
      <Link to={Paths.FAVORITES}>FAVORITES</Link>
    </>
  );
};

export { TopBar };
