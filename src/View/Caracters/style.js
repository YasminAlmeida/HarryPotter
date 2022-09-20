import styled from 'styled-components';
export const BodyCaracters = styled.section`
  background-color: #f3f4f5;
`;
export const ContainerCaracters = styled.ul`
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  list-style: none;
  justify-items: center;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const PicturesCaracters = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
export const ListCaracters = styled.li`
  border: 7px solid #22197;
  height: 300px;
  width: 223px;
  border-radius: 100%;
  position: relative;
  transition: transform 0.3s;
  margin-bottom: 50px;
  margin: 20px;
`;
export const NameCaracter = styled.h3`
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #140f43;
  padding: 0.625rem 1.875rem;
  border-radius: 2.125rem;
  font-size: 1.375rem;
  line-height: 1.6875rem;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  letter-spacing: -1px;
  transition: background-color 0.3s;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 500px;
  color: #000;
  word-wrap: break-word;
  outline: none;
  display: flex;
  height: 34px;
  font-size: 16px;
  border: 1px solid #5f6368;
  box-shadow: none;
  border-radius: 24px;
  text-align: center;
`;
export const Btn = styled.button`
  background: #140f43;
  border-radius: 2.125rem;
  padding: 0.625rem 1.25rem;
  border: none;
  display: inline-block;
  padding: 0.625rem;
  font-size: 1rem;
  font-family: 'Rubik', sans-serif;
  font-weight: normal;
  line-height: 1.2;
  color: #ffffff;
  cursor: pointer;
`;
export const Search = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
