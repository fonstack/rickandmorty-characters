import { StyledCharacterCard } from './styles';
import { CharacterCardProps } from './types';

const CharacterCard = ({ character, onFavSelected }: CharacterCardProps) => {
  const { id, name, image, gender, species, status, isFavorite } = character;

  return (
    <StyledCharacterCard>
      <p>{id}</p>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{status}</p>
      {isFavorite && <p>FAVORITEEEEEEEEEEEEEEEEEEE</p>}
      <button onClick={() => onFavSelected(id)}>{isFavorite ? 'Remove' : 'Add'}</button>
    </StyledCharacterCard>
  );
};

export { CharacterCard };
