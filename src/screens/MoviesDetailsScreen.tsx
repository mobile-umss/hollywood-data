import React from 'react';
import ItemLayout from '../components/ItemLayout';



export default function MoviesDetailsScreen({ route }) {
  const { item } = route.params;
  const imgUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
  return (
    <ItemLayout
      title={item.title}
      poster_path={imgUrl}
      release_date={item.release_date}
      popularity={item.popularity}
      overview={item.overview}
    />
  );
}
