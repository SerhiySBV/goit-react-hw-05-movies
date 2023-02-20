import {
  InfoBox,
  Lowtitle,
  Overview,
  ReleaseDate,
  Title,
} from './MovieInfo.styled';

export const MovieInfo = ({
  movieData: { title, overview, release_date, genres },
}) => {
  return (
    <InfoBox>
      <Title>{title}</Title>
      <ReleaseDate>Release date: {release_date}</ReleaseDate>
      <Lowtitle>Overview:</Lowtitle>
      <Overview> {overview}</Overview>
      <Lowtitle>Genres:</Lowtitle>
      {genres && !!genres.length ? (
        genres.map(genre => <p key={genre.id}>{genre.name}</p>)
      ) : (
        <p>We don't have any ganre for this movie</p>
      )}
    </InfoBox>
  );
};
