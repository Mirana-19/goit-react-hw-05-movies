import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderStyled, MainStyled, NavStyled } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'movies'}>Movies</NavLink>
        </NavStyled>
      </HeaderStyled>
      <MainStyled>
        <Suspense fallback={<p>Loading content</p>}>
          <Outlet />
        </Suspense>
      </MainStyled>
    </>
  );
}
