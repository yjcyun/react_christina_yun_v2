import React from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { NavLinks } from '../../constants/nav'
import styled from 'styled-components'
import Logo from './Logo'

const Navbar = ({ open, setOpen }) => {
  return (
    <Header>
      <Logo />
      <MenuButton onClick={() => setOpen(!open)}>
        <CgMenuRight />
      </MenuButton>
      <NavbarStyled>
        {NavLinks}
      </NavbarStyled>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 5rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`

const NavbarStyled = styled.nav`
  display: none;

  li {
    list-style: none;
    padding-left: 2rem;
    font-family: var(--sec-ff);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

const MenuButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  position: fixed;
  top: 1rem;
  right: 1rem;

  @media (min-width: 768px) {
    display: none
  }
`
export default Navbar