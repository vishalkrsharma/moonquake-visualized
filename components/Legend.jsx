import React, { FC } from 'react';
import styled from 'styled-components';
import legend from '@/assets/legend.png';

const Legend = () => {
  return (
    <LegendContainer>
      <Top>+1000m</Top>
      <Bottom>-1000m</Bottom>
      <Image
        src={legend.src}
        alt='Legend Image'
      />
    </LegendContainer>
  );
};

export default Legend;

const LegendContainer = styled.div`
  height: 25rem;
  width: 10rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: #ffffff;
`;

const Title = styled.div`
  margin: 0.5rem;
`;

const Image = styled.img`
  height: 25rem;
  position: absolute;
  right: 0.5rem;
  margin: 0.25rem;
  filter: brightness(0.8);
`;

const Top = styled.div`
  position: absolute;
  top: -0.5rem;
  left: 0;
`;

const Bottom = styled.div`
  bottom: -1rem;
  left: 0;
  position: absolute;
`;
