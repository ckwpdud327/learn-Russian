import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  padding: 1rem;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Learn Russian</Title>
      <Nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/alphabet">알파벳 학습</NavLink>
        <NavLink to="/basic">기본 학습</NavLink>
        <NavLink to="/about">소개</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;