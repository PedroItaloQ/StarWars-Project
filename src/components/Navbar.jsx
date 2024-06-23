import { Nav, NavLinksContainer, NavLink } from "@/styles/navbarStyled"

const Navbar = () => {
    return (
        <Nav>
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