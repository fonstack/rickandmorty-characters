import ReactTooltip from 'react-tooltip';
import { FavoriteFlag, IconTag, ImageContainer, InfoContainer, StyledCharacterCard, StyledInfo } from './styles';
import { CharacterCardProps } from './types';
import { Character } from '../../api/characters';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as MaleIcon } from '../../assets/icons/male.svg';
import { ReactComponent as FemaleIcon } from '../../assets/icons/female.svg';
import { ReactComponent as GenderlessIcon } from '../../assets/icons/genderless.svg';
import { ReactComponent as UnknownIcon } from '../../assets/icons/unknown.svg';

const getGenderHelper = (gender: Character['gender']) => {
  switch (gender) {
    case 'female':
      return 'Female';
    case 'male':
      return 'Male';
    case 'genderless':
      return 'Genderless';
    default:
      return 'Unknown gender';
  }
};

const getGenderIcon = (gender: Character['gender']) => {
  switch (gender) {
    case 'female':
      return <FemaleIcon />;
    case 'male':
      return <MaleIcon />;
    case 'genderless':
      return <GenderlessIcon />;
    default:
      return <UnknownIcon />;
  }
};

const CharacterCard = ({ character, onFavSelected }: CharacterCardProps) => {
  const { id, name, image, gender, species, status, isFavorite } = character;

  return (
    <StyledCharacterCard>
      <ImageContainer>
        <img src={image} alt="" />
        <FavoriteFlag role="button" onClick={() => onFavSelected(id)}>
          <HeartIcon className={isFavorite ? 'active' : ''} />
        </FavoriteFlag>
        <ReactTooltip id={`genderTip-${id}`} place="top" effect="solid">
          {getGenderHelper(gender)}
        </ReactTooltip>
        <IconTag data-tip data-for={`genderTip-${id}`}>
          {getGenderIcon(gender)}
        </IconTag>
      </ImageContainer>

      <InfoContainer>
        <StyledInfo>
          <p className="title">Name</p>
          <p className="content">{name}</p>
        </StyledInfo>
        <div className="info-row">
          <StyledInfo>
            <p className="title">Species</p>
            <p className="content">{species}</p>
          </StyledInfo>
          <StyledInfo>
            <p className="title">Status</p>
            <p className={`content status-${status}`}>{status}</p>
          </StyledInfo>
        </div>
      </InfoContainer>
    </StyledCharacterCard>
  );
};

export { CharacterCard };
