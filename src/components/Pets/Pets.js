import styled from "styled-components"; 
export const GallaryContainer = styled.section`
padding-top:60px;
padding-bottom:70px;

`
export const GalleryItem = styled.img`
   width: 270px;
  height: 208px;
  object-fit: cover;
  border-radius:10px;
`


export const GallerContent = styled.div`

display:flex; 
gap:20px ;
justify-content: center;
align-items: center;
margin:auto;
flex-wrap: wrap;
  width:100%;
 
`
export const GalleryTitle = styled.h3`
text-align: left;
margin:0;
margin-bottom:40px;
`
export const GalleryButton = styled.button`
display: flex;
align-items:center;
justify-content: center;
background-color: #FFB36C;
  color: black;
width: 138px;
height: 40px;
text-align:center;
padding: 10px 20px 10px 20px;
border-radius: 10px 10px 10px 10px;
font-size: 14px;
margin-top:40px;

font-weight: 500;
line-height: 14.63px;
border:none;
  &:hover{
 background-color:#fca311;
  }
 `
