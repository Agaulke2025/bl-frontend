import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LogoImg = styled.img`
  align-self: flex-start;
  width: 250px;
  height: 100px;
  margin-top: -30px;
`;
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  padding: 0rem 2rem;
  position: relative;
  transition: all 0.2s ease;
  &.fixed {
    position: sticky;
    top: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }`;

const NavLinkWrapper = styled.div`
  @media (max-width: 704px) {
    display: ${(props) => (props.active ? 'block' : 'none')};
    text-align: center;
    padding: 2rem 0;
  }`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: black;
  margin-left: 1rem;
  &:last-child {
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    &:hover {
      background-color: #007dfc;
    }
    &.active {
    color: #007dfc;
  }
  }
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 32px;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 704px) {
    display: block;
  };`
  


export { LogoImg, NavbarWrapper, NavLinkWrapper, StyledNavLink, StyledFontAwesomeIcon };
