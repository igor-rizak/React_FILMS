import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/Api';
import {
  List,
  ListItem,
  Author,
  Content,
  StyledDateText,
} from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(id);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    movieReviews();
  }, [id]);

  if (!reviews) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(rev => (
            <ListItem key={rev.id}>
              <Author>{rev.author}</Author>
              <Content>{rev.content}</Content>
              <StyledDateText>{Date(rev.created_at)}</StyledDateText>
            </ListItem>
          ))}
        </List>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
