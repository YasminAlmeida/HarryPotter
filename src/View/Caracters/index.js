import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../Services.js';
export default function Caracters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AllCaracters();
  }, []);

  const AllCaracters = async () => {
    const Caracter = await axiosInstance.get(`/characters`);
    setData(Caracter.data);
  };
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.house}</p>
            <img src={item.image} alt="caracter Pictures" />
          </li>
        ))}
      </ul>
    </div>
  );
}
