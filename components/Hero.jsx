import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <Title>
        <Main>MOONQUAKE VISUALIZED</Main>
        <Sub>VISUALIZING THE MOON SINCE 1969</Sub>
      </Title>
      <Links>
        <HyperLink
          href='/simulation'
          className='hero__links__link'
        >
          &lt;Visit Moon&gt;
        </HyperLink>
      </Links>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba($color: #000000, $alpha: 0.3);
`;

const Title = styled.div`
  margin: 1rem;
  text-align: center;
`;

const Main = styled.div`
  font-size: 4rem;
  color: #fff;
`;

const Sub = styled.div`
  font-size: 1.8rem;
  font-weight: 200;
  text-transform: uppercase;
  color: #fff;
`;

const Links = styled.div`
  color: #ffffff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const HyperLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  color: #ffffff;
  text-decoration: none;
  margin: 1rem 0.2rem;
`;
