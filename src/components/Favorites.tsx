import * as React from 'react';
import createPersistedState from 'use-persisted-state';
import { FavoritesProps } from '../models/proptypes';
import Favorite from './Favorite';

const useFavoritesState = createPersistedState('favorites');

const Favorites: React.FC<FavoritesProps> = props => {
  const [favorites, _] = useFavoritesState({});

  const tiles = Object.entries(favorites).map(([k, v]) => (
    <Favorite key={k} id={k} media_type={v as any} MovieTile={props.MovieTile} />
  ));

  return <div className="Favorites">{tiles.length > 0 ? tiles : <NoFavs />}</div>;
};

const NoFavs: React.FC = () => <p style={{ color: 'gray', width: 'fit-content' }}>You have no favorites yet</p>;

export default Favorites;
