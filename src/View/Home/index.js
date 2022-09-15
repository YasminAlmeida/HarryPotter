import React from 'react';
// import BackGround from '../../Img/background.png';
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
          <S.MoreInformation class="cta-arrow">
            Start your journey here
          </S.MoreInformation>
          <button>Click</button>
        </div>
      </S.ContainerHome>
      {/* <S.Img src={BackGround} alt="" srcset="" no-repeat top center /> */}
    </S.SectionHome>
  );
}
