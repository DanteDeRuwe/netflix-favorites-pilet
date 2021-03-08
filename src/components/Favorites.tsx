import * as React from 'react';
import createPersistedState from 'use-persisted-state';
import { MovieTileProps } from '../models/MovieTileProps';
import Favorite from './Favorite';

const useFavoritesState = createPersistedState('favorites');

const apiKey = '87dfa1c669eea853da609d4968d294be';

interface FavoritesProps {
  MovieTile: React.FC<MovieTileProps>;
}

const Favorites: React.FC<FavoritesProps> = props => {
  const [favorites, _] = useFavoritesState({});

  const tiles = Object.entries(favorites).map(([k, v]) => (
    <Favorite id={k} media_type={v as any} MovieTile={props.MovieTile} />
  ));

  return <div className="Favorites">{tiles}</div>;
};

export default Favorites;
