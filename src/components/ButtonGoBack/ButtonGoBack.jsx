import { useLocation, useNavigate } from 'react-router-dom';

export const ButtonGoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location?.state?.from || '/';

  const onGoback = () => navigate(subLocation);

  return (
    <button type="button" onClick={onGoback}>
      Go BACK
    </button>
  );
};
