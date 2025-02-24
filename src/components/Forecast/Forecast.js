import styled from "styled-components";

export const ForecastContainer = styled.section`
  padding: 80px 0 0;
  
  & > div{
      display:flex;
      flex-direction:column;
    background: #E8E8E8;
  border-radius: 20px;
  margin:auto;
  }
 @media (max-width: 1180px){
    padding: 50px 0 50px;
 }
`;

export const Title = styled.h2`
font-weight: 500;
font-size: 16px;
line-height: 19.5px;
text-align:left;
margin:0;
margin:26px 76px 20px;
  @media (max-width: 1180px){
margin:26px 30px 20px;
 }
@media (max-width: 680px) {
   margin:26px 18px 20px;

    }
`;

export const DayContainer = styled.div`
&:nth-child(9) {
        margin-bottom: 42px;
    }
  display: flex;
  align-items: center;
  background: #D9D9D9;
    height: 47px;
  width:986px;
  margin:0 auto 10px ;
    border-radius: 10px;
        justify-content: space-around;    
   @media (max-width: 1180px){
   width:564px;
 }
    @media (max-width: 680px) {
     background: #D9D9D9;
  border-radius: 10px;
  text-align: center;
  width: 100px;
  height:140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom:35px;
      }
`;

export const DateText = styled.p`
  font-size: 16px;
@media (max-width: 680px) {
     font-size:10px;
     margin:0;
    }
`;

export const WeatherIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const TempText = styled.p`
  font-size: 16px;
  text-align: center;
 display:flex;
 align-items: center;
line-height: 19.5px;
    @media (max-width: 680px) {
     flex-direction:column;
     font-size:10px;
          margin:0;

    }

`;

export const ConditionText = styled.p`
  text-align: right;
font-size: 16px;
line-height: 19.5px;
text-align: end;
  @media (max-width: 680px) {
     font-size:10px;
     margin:0;
     text-align: center;

    }
`;
export const Wrap = styled.div`
  @media (max-width: 680px) {
   display:flex;
flex-wrap:wrap;
    }

`
