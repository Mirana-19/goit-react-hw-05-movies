import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 25px;
  background-color: #222121;
  color: #f3f3f3;
  font-size: 28px;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 40px;
`;

export const MainStyled = styled.main`
  background-color: #191818;
  color: #f3f3f3;
`;

export const LinkStyled = styled(Link)`
  border-radius: 4px;
  background-color: #e50914;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #9b060e;
  }
`;
