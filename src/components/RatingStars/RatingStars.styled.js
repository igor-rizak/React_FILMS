import Star from '@mui/icons-material/Star';
import StarHalf from '@mui/icons-material/StarHalf';
import StarBorder from '@mui/icons-material/StarBorder';
import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const FullStar = styled(Star)`
  color: gold;
`;

export const HalfStar = styled(StarHalf)`
  color: gold;
`;

export const EmptyStar = styled(StarBorder)`
  color: #ddd;
`;