import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f8f9fa;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Nav>
      <Logo to="/">LeanRussian</Logo>
      <NavLinks>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/alphabet">알파벳 학습</NavLink>
        <NavLink to="/basic">기본 학습</NavLink>
        <NavLink to="/about">소개</NavLink>
      </NavLinks>
    </Nav>
  </HeaderWrapper>
);

export default Header;