import * as React from 'react';
import { PiletApi } from 'netflix-piral';
import { Link } from 'react-router-dom';
import FavoriteToggle from './components/FavoriteToggle';
import './style.scss';
import { MovieTileProps } from './models/proptypes';

export function setup(app: PiletApi) {
  app.registerMenu('Favorites', () => <Link to="/favorites">Favorites</Link>);

  const MovieTile: React.FC<MovieTileProps> = props => <app.Extension name="MovieTile" params={props}></app.Extension>;
  const Favorites = React.lazy(() => import('./components/Favorites'));
  app.registerPage('/favorites', () => <Favorites MovieTile={MovieTile}></Favorites>);

  app.registerExtension('ListToggle', props => <FavoriteToggle {...props.params}></FavoriteToggle>);
}
