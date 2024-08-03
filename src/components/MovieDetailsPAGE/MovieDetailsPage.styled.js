// MovieDetailsPage.styled.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const Poster = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
`;

export const Details = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Genres = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const GenreList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const GenreItem = styled.li`
  font-size: 16px;
`;

export const Overview = styled.p`
  font-size: 16px;
  margin-top: 16px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
`;

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const VoteCount = styled.div`
  font-size: 16px;
`;
