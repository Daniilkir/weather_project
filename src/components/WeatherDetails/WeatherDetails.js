import styled from "styled-components";

export const DetailsContainer = styled.section`
  padding: 75px, 0, 85px;
    width:100%;
  margin:auto;
  & > div{
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  background: #E8E8E8;
  border-radius: 20px;
  padding: 20px;
     @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);

    }}

   

`;

export const DetailBox = styled.div`
  background: #D9D9D9;
  border-radius: 10px;
  text-align: center;
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding:17.5px 0 17.5px;
   @media (max-width: 1180px){
 width:177px;}
    @media (max-width: 680px) {
  width:207px;
    }
`;

export const DetailTitle = styled.p`
  font-size: 14px;
  color: #555;
  `;

export const DetailValue = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DetailIcon = styled.img`
  width: 85px;
  height: 85px;
  margin-top: 10px;
`;
