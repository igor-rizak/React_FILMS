import {
  StarContainer,
  EmptyStar,
  FullStar,
  HalfStar,
} from './RatingStars.styled';

export const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 10;

  return (
    <StarContainer>
      {Array.from({ length: totalStars }, (_, index) => {
        if (index < fullStars) {
          return <FullStar key={index} />;
        }
        if (index === fullStars && hasHalfStar) {
          return <HalfStar key={index} />;
        }
        return <EmptyStar key={index} />;
      })}
    </StarContainer>
  );
};
