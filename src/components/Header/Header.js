import styled from "styled-components";

export const HeaderWrapper = styled.header`
  
  & > div{
    display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
     @media (max-width: 680px){
  display: block;
  }
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

`;

export const LogoHeader = styled.img`
  width: 82px;
  height: 56px;
 @media (max-width: 680px ){
  display:none;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: black;
width: 77px;
font-size: 14px;
font-weight: 500;
line-height: 14.63px;
 @media (max-width: 1180px){
  display:none;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
   @media (max-width: 680px){
display:none;
 }
`;

export const SignUpButton = styled.button`
  background-color: #FFB36C;
  color: black;
width: 97px;
height: 35px;
text-align:center;
padding: 10px 20px 10px 20px;
gap: 10px;
border-radius: 10px;
font-size: 14px;
font-weight: 500;
line-height: 14.63px;
border:none;
  &:hover{
 background-color:#fca311;
  }
`;


export const MenuCont = styled.div`
  display: none;
  @media (max-width: 680px) {
    display: flex;
    width:100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuBtn = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const MenuContent = styled.div`
  width: 100vw;
  align-items:center;
  justify-content:center;
  transition: height 0.3s ease-in-out;
      background-color:#E6E6E6;
  display:flex;
  &.isOpen {
    height: 150px;
  }
  &.isClosed {
  display:none;
    height: 0;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align:left;
  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
      margin-top:22px;

  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: end;
flex-direction:column;
margin-top:30px;
margin-left: 110px;
  `;

export const SignButton = styled.button`
  background-color: #FFB36C;
  color: black;
width: 82px;
height: 35px;
text-align:center;
border-radius: 10px;
font-size: 12px;
font-weight: 500;
margin-top:20px;
line-height: 14.63px;
border:none;
  &:hover{
 background-color:#fca311;
  }
`
export const LogoHeaderMobile = styled.img`
display:none;
 @media (max-width: 680px){
  display:flex;
  margin-right:105px;
    }
`
export const MobileMenu = styled.div`
display: flex; 
align-items:center;
justify-content:center;
`