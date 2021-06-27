import React from 'react';
import ItemLayout from '../components/ItemLayout';



export default function MoviesDetailsScreen({ route }) {
  const { item } = route.params;
  const imgUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;

  return (
    <ItemLayout
      title={item.title}
      id={item.id}
      poster_path={imgUrl}
      release_date={item.release_date}
      vote_average={item.vote_average}
      overview={item.overview}
      genres={item.genre_ids}
      serie={false}
    />
  );
}
