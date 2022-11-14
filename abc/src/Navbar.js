import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import './favicon.css'
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to="/">
          <img className='fav-nav' src='./favicon.ico' />
          </NavLink>
        <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            Connect Your Wallet
          </NavLink>
          <NavLink to='/annual'>
            About project
          </NavLink>
          <NavLink to='/blogs'>
            About Celo
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signinActivist'>Sign In as Activist</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/signinfarmer'>Sign In as Farmer</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/signinowner'>Sign In as Owner</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;