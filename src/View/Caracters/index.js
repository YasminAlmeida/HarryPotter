import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../Services.js';
import * as S from './style.js';

export default function Caracters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AllCaracters();
  }, []);

  const AllCaracters = async () => {
    const Caracter = await axiosInstance.get(`/characters`);
    setData(Caracter.data);
  };

  const [input, setInput] = useState('');
  const filterData = () => {
    const newData = data.filter((item) => item.name.includes(input));
    setData(newData);
  };
  return (
    <S.BodyCaracters>
      <S.Search>
        <S.Input
          placeholder="Search for Caracter"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <S.Btn
          type="submit"
          onClick={() => {
            filterData();
          }}
        >
          Search
        </S.Btn>
      </S.Search>

      <S.ContainerCaracters>
        {data
          .filter((item, index) => item.name.toLowerCase().includes(input))
          .map((item, index) => (
            <S.ListCaracters key={index}>
              <S.PicturesCaracters src={item.image} alt="caracter Pictures" />{' '}
              <S.NameCaracter>{item.name}</S.NameCaracter>
            </S.ListCaracters>
          ))}{' '}
      </S.ContainerCaracters>
    </S.BodyCaracters>
  );
}
