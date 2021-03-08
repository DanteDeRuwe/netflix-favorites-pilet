import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import { Link } from 'react-router-dom';
import FavoriteToggle from './components/FavoriteToggle';
import './style.scss';

export function setup(app: PiletApi) {
  app.registerMenu('Favorites', () => <Link to="/favorites">Favorites</Link>);
  //app.registerPage('/favorites', Favorites);
  app.registerExtension('ListToggle', FavoriteToggle);
}
