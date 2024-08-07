import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/Api';
import {
  List,
  ListItem,
  Author,
  Content,
  StyledDateText,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { id } = useParams();
  const listReviews = useRef(null);

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

  useEffect(() => {
    if (reviews.length > 0 && listReviews !== null) {
      const listReviewsCurrent = listReviews.current;
      const rect = listReviewsCurrent.getBoundingClientRect();
      window.scrollTo({
        top: rect.top,
        behavior: 'smooth',
      });
    }
  }, [reviews]);

  if (!reviews) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {reviews.length > 0 ? (
        <List ref={listReviews}>
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

export default Reviews;
