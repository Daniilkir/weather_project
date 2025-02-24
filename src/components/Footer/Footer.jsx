import instagramIcon from "../../images/instagram.png"
import facebookIcon from "../../images/facebook.png"
import whatsappIcon from "../../images/whatsapp.png"
import logo from "../../images/logo.png"
import { FooterContainer, MainContent, FooterContent, FooterInfo, FooterLinks, FooterIcons, Icon, Logo, FooterTitle } from "./Footer.js"

import Container from "../Container/Container.jsx"
function Footer() {


    return (
        <FooterContainer>
            <Container>
                <FooterContent>
                    <Logo src={logo} alt="logo" />
                    <MainContent>
                        <FooterInfo>
                            <h3>Address</h3>
                            <p>Svobody str.35</p>
                            <p>Kyiv</p>
                            <p>Ukraine</p>
                        </FooterInfo>
                        <FooterIcons>
                            <h3>Contact us</h3>
                            <FooterTitle>

                                <FooterLinks href="https://www.instagram.com/">
                                    <Icon src={instagramIcon} alt="instagram" /></FooterLinks>
                                <FooterLinks href="https://www.facebook.com/?locale=ru_RU">
                                    <Icon src={facebookIcon} alt="facebook" /></FooterLinks>
                                <FooterLinks href="https://www.whatsapp.com/?lang=ru_RU">
                                    <Icon src={whatsappIcon} alt="whatsApp" /></FooterLinks>
                            </FooterTitle>
                        </FooterIcons>
                    </MainContent>
                </FooterContent>
            </Container>
        </FooterContainer>
    )
}
export default Footer;