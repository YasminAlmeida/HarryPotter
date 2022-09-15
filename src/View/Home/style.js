import styled from 'styled-components';

export const SectionHome = styled.section`
  background-color: #221972;
  height: 100vh;
  display: flex;
  align-items: center;
  button {
    display: inline-block;
    line-height: 1;
    color: #212529;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 2rem;
    font-size: calc(1rem + 0.3vw);
    border-radius: 0.8125rem;
    background-color: #fec012;
    border-color: #fec012;
  }
`;
export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.5rem;
  margin-top: 3rem;
  color: #fec012;
  filter: drop-shadow(30px 10px 4px #18105c);
`;
export const MoreInformation = styled.h4`
  color: #fec012;
`;
