import React, { useState } from 'react'
import Logo from '../components/Logo'
import { NavbarWrapper, NavLinkWrapper, StyledNavLink, StyledFontAwesomeIcon } from '../styles/Navbar.style'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const links = [
    {page: 'Home', href: '/'},
    {page: 'Plan', href: '/plan'},
    {page: 'Ticks', href: '/ticks'},
    {page: 'Sign Up', href: '/signup'}]
  return (
    <NavbarWrapper>
      <Logo />
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)}/>
      <NavLinkWrapper active={active}>
        {links.map((link) => (
          <StyledNavLink activeClassName="active" key={link.page} to={link.href}>
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
