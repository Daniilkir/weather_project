import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: #FFB36C;
margin-top: auto;
display:flex;
align-items:center;

`
export const FooterContent = styled.div`
display:flex;
gap:103px;
margin-top:40px;
margin-bottom: 40px;
 @media (max-width: 680px) {
    gap:65px;
}
`
export const FooterInfo = styled.div`
line-height:14.63px;
font-size: 12px;
font-weight: 500;
text-align: left;
margin: 0;
>h3{
margin:0;
margin-bottom:10px;
}
>p{
margin:0}
width:92px;
`

export const FooterIcons = styled.div`
display: flex;
align-items:left;
flex-direction:column;
>h3{
margin:0;
text-align:left;
margin-bottom:10px;
@media (max-width: 680px) {
    text-align:center;
    margin-top:25px;
}
}
`
export const FooterLinks = styled.a`
display:flex;
justify-content: center;
width:40px;
height:40px;

`
export const Icon = styled.img`
width:40px;
height:40px;

`
export const Logo = styled.img`
width:90px;
height:62px;
margin-bottom:10px;
@media (max-width: 680px) {
    width:60px;
    height:44px;
}
`
export const FooterTitle = styled.div`
display:flex;
    gap:20px;

`
export const MainContent = styled.div`
   display:flex;
   gap:103px;
    flex-direction: row;
@media (max-width: 680px) {
    display:flex;
    gap:0;
    flex-direction: column;
    align-items:center;
    justify-content:center;
}
`