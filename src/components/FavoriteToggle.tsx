import * as React from 'react';
import createPersistedState from 'use-persisted-state';

const useFavoritesState = createPersistedState('favorites');

export interface FavoriteToggleProps {
  backdrop: string;
  title: string;
  score: string;
  overview: string;
  movieId: string;
}

const FavoriteToggle: React.FC<FavoriteToggleProps> = props => {
  const [favorites, setFavorites] = useFavoritesState({});

  const toggle = React.useCallback(() => {
    const favs = { ...favorites };
    delete favs[props.movieId];

    if (props.movieId in favorites) setFavorites(favs);
    else setFavorites({ ...favorites, [props.movieId]: true });
  }, [favorites]);

  return (
    <div onClick={toggle} data-toggled={`${!!favorites[props.movieId]}`} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-heart"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default FavoriteToggle;
