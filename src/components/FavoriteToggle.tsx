import * as React from 'react';
import createPersistedState from 'use-persisted-state';
import { FavoriteToggleProps } from '../models/proptypes';
import { FavoritesData, User } from '../models/types';

const useFavoritesState = createPersistedState('favorites');
const useUserState = createPersistedState('user');

const FavoriteToggle: React.FC<FavoriteToggleProps> = props => {
  const [favorites, setFavorites] = useFavoritesState<FavoritesData>({});
  const [user, _] = useUserState<User>(null);

  if (!user) return <></>;

  const toggle = React.useCallback(() => {
    if (!favorites || !user) return;

    const favs = { ...favorites };

    if (user.userId in favs && props.movieId in favs[user.userId]) {
      delete favs[user.userId][props.movieId];
    } else {
      favs[user.userId] = favs?.[user.userId] ?? {};
      favs[user.userId][props.movieId] = props.media_type;
    }

    setFavorites(favs);
  }, [favorites, user]);

  return (
    <div onClick={toggle} data-toggled={`${!!favorites?.[user.userId]?.[props.movieId]}`} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-heart"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default FavoriteToggle;
