import React from 'react';
// import BackGround from '../../Img/background.png';
import { Link } from 'react-router-dom';
import characters from '../../Img/hero-harry.png';
import * as S from '../Home/style.js';
export default function Home() {
  return (
    <S.SectionHome>
      <S.ContainerHome>
        <div>
          <S.Img src={characters} alt="" srcset="" />{' '}
        </div>
        <div>
          <S.Title>Welcome to Hogwarts!</S.Title>{' '}
          <S.MoreInformation>Start your journey here</S.MoreInformation>
          <Link to="/Caracters">
            <button>Click</button>
          </Link>
        </div>
      </S.ContainerHome>
      {/* <S.Img src={BackGround} alt="" srcset="" no-repeat top center /> */}
    </S.SectionHome>
  );
}
