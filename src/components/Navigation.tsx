import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">홈</NavLink></NavItem>
        <NavItem><NavLink to="/about">소개</NavLink></NavItem>
        <NavItem><NavLink to="/alphabet">알파벳 학습</NavLink></NavItem>
        <NavItem><NavLink to="/basic">기초 학습</NavLink></NavItem>
        <NavItem><NavLink to="/frequent-words">자주 사용되는 단어</NavLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;