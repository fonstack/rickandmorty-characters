import { FavoriteFlag, ImageContainer, InfoContainer, StyledCharacterCard } from './styles';
import { CharacterCardProps } from './types';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';

const CharacterCard = ({ character, onFavSelected }: CharacterCardProps) => {
  const { id, name, image, gender, species, status, isFavorite } = character;

  return (
    <StyledCharacterCard>
      <ImageContainer>
        <img src={image} alt="" />
        <FavoriteFlag role="button" onClick={() => onFavSelected(id)}>
          <HeartIcon className={isFavorite ? 'active' : ''} />
        </FavoriteFlag>
      </ImageContainer>

      <InfoContainer>
        <p>{id}</p>
        <p>{name}</p>
        <p>{gender}</p>
        <p>{species}</p>
        <p>{status}</p>
        {isFavorite && <p>FAVORITEEEEEEE</p>}
        <button onClick={() => onFavSelected(id)}>{isFavorite ? 'Remove' : 'Add'}</button>
      </InfoContainer>
    </StyledCharacterCard>
  );
};

export { CharacterCard };
