import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 760px;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; // Novo: alinha os itens ao longo do eixo principal
`;

export const NavBarMenuWrapper = styled(FlexContainer)`
  background: black;
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  text-transform: uppercase;
  overflow-y: visible;
  position: relative;
  max-height: 50px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .1);
`;

export const NavBarMobile = styled.div`
  display: inline-block;
  position: relative;
`;

const baseButtonStyles = css`
  display: block;
  position: relative;
  padding: 4px;
  border: 0px;
  margin: 0;
  outline: none;
`;

export const NavBarToggle = styled.button`
  ${baseButtonStyles}
  background: black;
  border-radius: 0 0 12px 0;
  min-height: 50px;
  min-width: 50px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .2);
`;

const baseIconBarStyles = css`
  background: #868d97;
  height: 6px;
  width: 30px;
  display: block;
  margin-top: 5px;
  border-radius: 3px;
  position: relative;
  transition: all .3s ease;

  &:first-of-type {
    margin-top: 0;
  }

  &:after {
    content: "";
    width: 6px;
    height: 6px;
    background: #868d97;
    position: absolute;
    right: -8px;
    border-radius: 3px;
  }
`;

export const IconBar = styled.span`
  ${baseIconBarStyles}
`;

export const MenuItems = styled.nav`
  visibility: hidden;
  position: absolute;
  top: 40px;
  left: 10;
  z-index: 200;

  &.open {
    visibility: visible;
  }

  ul {
    margin: 0;
    padding: 0;
    max-width: 50vw;
  }
`;

export const MenuItem = styled.li`
  text-align: left;
  display: block;
  min-height: 50px;
  line-height: 50px;
  margin-left: 40px;
  white-space: nowrap;

  a,
  a:visited {
    color: #868d97;
    text-decoration: none;

    &:hover {
      color: #d0112b;
    }
  }
`;

export const Img = styled.img`
    width: 50px;
    margin: 0 0 0 10px;
`