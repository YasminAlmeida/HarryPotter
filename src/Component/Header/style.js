import styled from 'styled-components';
export const Navigation = styled.nav`
  background: #221972;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ContainerLista = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;
export const LogoImg = styled.img`
  height: 30px;
  width: 50px;
`;
export const List = styled.li`
  padding: 1px;
  a {
    font-size: 1.125rem;
    line-height: 1.3;
    padding: 10px 10px;
    text-decoration: none;
    color: #fec012;
    display: block;
  }
`;
