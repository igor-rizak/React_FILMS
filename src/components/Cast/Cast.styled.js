import styled from "styled-components";

export const CastContainer = styled.div`


  padding: 20px;
  background-color: #f8f8f8;
`;

export const CastTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap:10px;
`;

export const CastItem = styled.li`
  display: flex;
  align-items: center;
  width:200px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ActorName = styled.p`
  margin: 0 10px;
  font-size: 18px;
`;

export const ActorImage = styled.img`
  width: 50px;
  height: 75px;
  border-radius: 5px;
`;
