import { useState, useEffect } from 'react';
import { getMovieCredits } from 'API/Api';
import { useParams } from 'react-router-dom';
import {
  CastContainer,
  CastTitle,
  CastList,
  CastItem,
  ActorImage,
  ActorName,
} from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const movieCredits = async () => {
      try {
        const response = await getMovieCredits(id);
        setActors(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    movieCredits();
  }, [id]);

  if (!actors.length) {
    return <p>Loading...</p>;
  }

  return (
    <CastContainer>
      <CastTitle>CAST</CastTitle>
      <CastList>
        {actors.map(actor => (
          <CastItem key={actor.cast_id}>
            <ActorImage
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};
