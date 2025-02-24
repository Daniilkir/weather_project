import React, { useState } from "react";
import { HeaderWrapper, MenuContainer, MenuLink, SignUpButton, AuthContainer, LogoHeader, MenuCont, MenuBtn, MobileMenu, MenuContent, UserActions, NavLinks, SignButton, LogoHeaderMobile } from "./Header.js";
import Modal from "../Modal/Modal.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../images/logo.png";
import Container from "../Container/Container.jsx";

function Header({ setIsLoggedIn, isLoggedIn }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const style = { color: "#556080", height: "50px", width: "50px" };
    const handleScroll = (id) => {
        window.location.hash = id;
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <HeaderWrapper>
            <Container>
                <MenuContainer>
                    <div>
                        <LogoHeader src={logo} alt="logo" />
                    </div>
                    <MenuContainer>
                        <MenuLink onClick={() => handleScroll("gallery")}>Gallery</MenuLink>
                        <MenuLink onClick={() => handleScroll("contacts")}>Contacts</MenuLink>
                        <MenuLink onClick={() => handleScroll("puppies")}>Puppies</MenuLink>

                    </MenuContainer>
                </MenuContainer>
                <AuthContainer>
                    <SignUpButton onClick={openModal}>Sign Up</SignUpButton>
                    <FaCircleUser style={style} />
                </AuthContainer>
                {isModalOpen && <Modal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onClose={closeModal} />}
                <MenuCont>
                    <MobileMenu>
                        <LogoHeaderMobile src={logo} alt="logo" />

                        <MenuBtn onClick={() => setIsOpen(!isOpen)}>
                            <p>Menu<IoIosArrowDown size={13} /></p>
                        </MenuBtn>
                    </MobileMenu>
                    <MenuContent className={isOpen ? "isOpen" : "isClosed"}>
                        <NavLinks>
                            <NavLinks onClick={() => handleScroll("contacts")}>Contacts</NavLinks>
                            <NavLinks onClick={() => handleScroll("puppies")}>Puppies</NavLinks>
                        </NavLinks>
                        <UserActions>
                            <FaCircleUser style={style} size={30} />
                            <SignButton onClick={openModal}>Sign Up</SignButton>
                        </UserActions>
                    </MenuContent>
                </MenuCont>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;
