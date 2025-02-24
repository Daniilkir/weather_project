import styled from "styled-components";

export const ContainerGraph = styled.section`
padding: 85px 0 0;
&> div{
background: #E8E8E8;
  border-radius: 20px;
  margin: auto;}
   @media (max-width: 1180px){
    padding: 50px 0 0;
 }
    
`;

export const GraphWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    padding-bottom:40px;
    padding-right:41px;
  @media (max-width: 680px) {
     padding-bottom:38px;
    padding-right:15px;
    }

`;
export const TitleGraph = styled.h3`
text-align: left;
width: 150px;
font-weight: 500;
margin:0;
display:flex;
margin-left:77px;
align-items:center;
margin-bottom:20px;
padding-top:26px;
  @media (max-width: 1180px){
margin-left:47px;
 }
`
