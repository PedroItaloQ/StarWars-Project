import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  background-color: rgb(250, 255, 100);
  padding: 4px 0;
  z-index: 1000;
`;

const NavLinksContainer = styled.div`   

`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: rgb(31, 30, 30);
  margin: 0 3rem;
  font-weight: bold;
  margin-top: 3vh;
  font-family: 'Poetsen One', sans-serif;
  font-family: 'Poetsen One', sans-serif;

  &:hover {
    color: #4c4848;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export { NavLink, Nav, NavLinksContainer};