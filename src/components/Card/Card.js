import styled from "styled-components";

export const Card = styled.section`
  padding-bottom:75px;
padding-top:60px;
&>div{
padding: 20px;
  background: #E8E8E8;
  border-radius: 20px;
  text-align: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:0;
}
  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 170px;
`;

export const ForecastButtons = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #FFB36C;
  color: black;
  width: 117px;
  height: 28px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 21px;
  font-size: 12px;
  border: none;

  &:hover {
    background-color: #fca311;
  }
`;

export const Icon = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;

export const Temperature = styled.p`
  font-size: 20px;
`;

export const SeeMore = styled.button`
  margin-top: 10px;
  background-color: #FFB36C;
  color: black;
  width: 117px;
  height: 28px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 12px;
  border: none;

  &:hover {
    background-color: #fca311;
  }
`;

export const IconsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
