import { StyledButton } from './ButtonGoBack.styled';

export const ButtonGoBack = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Go BACK
    </StyledButton>
  );
};
