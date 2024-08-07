import React from 'react';
import { URL_POSTER } from 'API/Api';
import {
  Container,
  Poster,
  Details,
  Title,
  Genres,
  GenreList,
  GenreItem,
  Overview,
  RatingContainer,
  RatingStars,
  VoteCount,
} from './MovieDetailsPage.styled';
import { RatingStars as RatingStarsComponent } from '../RatingStars/RatingStars';

export const MovieDetailsPage = ({ film }) => {
  const {
    title = 'No title available',
    genres = [],
    overview = 'No description available',
    poster_path,
    vote_average = 0,
    vote_count = 'No vote count available',
  } = film;

  return (
    <Container>
      {poster_path && (
        <Poster src={`${URL_POSTER}${poster_path}`} alt={`${title} poster`} />
      )}
      <Details>
        <Title>{title}</Title>
        <Genres>GENRES</Genres>
        <GenreList>
          {genres.length > 0 ? (
            genres.map(genre => (
              <GenreItem key={genre.id}>{genre.name}</GenreItem>
            ))
          ) : (
            <GenreItem>No genres available</GenreItem>
          )}
        </GenreList>
        <Overview>{overview}</Overview>
        <RatingContainer>
          <RatingStars>
            <VoteCount>Rating: {vote_average}</VoteCount>
            <RatingStarsComponent rating={vote_average} />
          </RatingStars>
        </RatingContainer>
        <VoteCount>Vote count: {vote_count}</VoteCount>
      </Details>
    </Container>
  );
};
