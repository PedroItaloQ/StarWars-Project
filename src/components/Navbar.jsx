import { Nav, NavLinksContainer, NavLink } from "@/styles/navbarStyled"
import Image from "next/image";
import img from "@/assets/Star_Wars_Logo.svg.png"

const Navbar = () => {
    return (
        <Nav>
            <Image src={img} alt="logoStarWars" width="100" height="100"/>
            <NavLinksContainer>
                <NavLink href="/" passHref>
                    Home
                </NavLink>
                <NavLink href="/Sobre" passHref>
                    Sobre
                </NavLink>
            </NavLinksContainer>
        </Nav>
    )
}

export default Navbar;