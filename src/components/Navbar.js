import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import { NavbarWrapper, NavLinkWrapper, StyledNavLink, StyledFontAwesomeIcon } from '../styles/Navbar.style'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState(false);
  const links = [
    {page: 'Home', href: '/'},
    {page: 'Plan', href: '/plan'},
    {page: 'Trips', href: '/trips'},
    {page: 'Log in', href: '/login'}]

  /* This function will make the navbar sticky if a user starts scrolling */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFix(true)
      } else {
        setFix(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <NavbarWrapper className={fix ? 'fixed' : ''}>
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
