import styled from "styled-components";
import backgroundImage from "../../images/hero.jpg";

export const HeroContainer = styled.section`
  background: url(${backgroundImage}) center/cover no-repeat;
&>div{
  position: relative;
  width: 100%;
  height: 595px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
}

}
`;


export const Title = styled.h1`
  z-index: 2;
  font-family: "Montserrat";
  width: 411px;
  height: 49px;
  font-weight: 600;
  margin-top:100px;
  @media (max-width: 680px) {
     font-size:16px;

    }
`;

export const Subtitle = styled.h3`
  z-index: 2;
  display: flex;
  max-width: 600px;
  margin-top: 80px;
  font-family: "Montserrat Alternates", serif;
  font-weight: 500;
  font-style: normal;
  text-align: right;
  


  span {
    flex: 1;
    font-size:24px;

     @media (max-width: 680px) {
font-size:10px;   
text-align:left; 
}
} 
    
}
  }
  span:last-child {
    text-align: left;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 144px;
  background: #FFFFFF;
  margin: 0 15px;
`;

export const SearchContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: 625px;
  height: 42px;
  margin-top: 80px;
  margin-bottom:100px;
  @media (max-width: 680px) {
  width:174px;
  height:15px;
}
`;
export const MobileSpan = styled.span`

display:none;
        @media (max-width: 680px) {
        display: flex;
        width:136px;

}
}
`
export const DeviceSpan = styled.span`
width:345px;
font-size:24px;
@media (max-width: 680px) {
        display: none;


}
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
  background: #D9D9D9;
`;

export const SearchButton = styled.button`
  background: #FFB36C;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #fca311;
  }
  svg{
    @media (max-width: 680px) {
    width:9px;  
    height:9px;
}
  
    }

`;
