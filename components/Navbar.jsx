import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Brand href='/'>MOON</Brand>
      <Links>
        <HyperLink href='/about'>About</HyperLink>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2.5rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const Brand = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  font-size: 3rem;
  text-decoration: none;
  color: #fff;
`;

const Links = styled.div``;

const HyperLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  font-size: 1.5rem;
  text-decoration: none;
  color: #ffffff;
`;
