import * as React from 'react';
import { MovieTileProps } from '../models/MovieTileProps';

interface FavoriteProps {
  id: string;
  media_type: 'tv' | 'movie';
  MovieTile: React.FC<MovieTileProps>;
}

const apiKey = '87dfa1c669eea853da609d4968d294be';

const Favorite: React.FC<FavoriteProps> = props => {
  const [data, setData] = React.useState<any>({});

  const loadContent = () => {
    let requestUrl = `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=${apiKey}`;

    fetch(requestUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    loadContent();
  }, [props.id]);

  let backDrop = 'http://image.tmdb.org/t/p/original' + data.backdrop_path;
  let name = data.name ? data.name : data.original_title;

  return (
    <props.MovieTile
      key={props.id}
      media_type={props.media_type}
      movieId={props.id}
      title={name}
      score={data.vote_average}
      overview={data.overview}
      backdrop={backDrop}
    ></props.MovieTile>
  );
};

export default Favorite;
