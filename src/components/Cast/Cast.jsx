import { useState, useEffect, useRef } from 'react';
import { getMovieCredits } from 'API/Api';
import { useParams } from 'react-router-dom';
import img from '../IMG/poster.jpg';
import {
  CastContainer,
  CastTitle,
  CastList,
  CastItem,
  ActorImage,
  ActorName,
} from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();
  const listEl = useRef(null);

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

  useEffect(() => {
    if (actors.length > 0 && listEl.current) {
      const listElCurrent = listEl.current;
      const rect = listElCurrent.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: 'smooth',
      });
    }
  }, [actors]);

  if (!actors.length) {
    return <p>Loading...</p>;
  }

  return (
    <CastContainer>
      <CastTitle>CAST</CastTitle>
      <CastList ref={listEl}>
        {actors.map(actor => (
          <CastItem key={actor.cast_id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : img
              }
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
