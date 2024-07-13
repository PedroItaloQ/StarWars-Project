import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0);
  padding: 4px 0;
  z-index: 1000;
`;

const NavLinksContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: rgb(255, 255, 255);
  margin: 20px;
  font-weight: bold;
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