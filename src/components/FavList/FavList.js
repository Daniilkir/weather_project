import styled from "styled-components";

export const FavoritesContainer = styled.section`
  display: flex;
  align-items: center;
  padding-bottom: 75px;

`;
export const CardList = styled.div`
display:flex;
  align-items: center;
  justify-content: center;
  gap:90px;
  flex-wrap: wrap;
`
export const Title = styled.h3`
text-align:center;
margin-bottom:40px;
`
export const Card = styled.div`
  padding: 20px;
  background: #E8E8E8;
    border-radius: 20px;
  text-align: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
export const Temperature = styled.p`
  font-size: 20px;
`;
export const Icon = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 170px;
`;