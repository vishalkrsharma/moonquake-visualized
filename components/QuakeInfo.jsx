import { StationType } from '@/data/QuakeData';
import { useDataContext } from '@/hooks/useDataContext';
import React from 'react';
import styled from 'styled-components';

const QuakeInfo = () => {
  const { quake } = useDataContext();

  return (
    quake !== null && (
      <QuakeInfoContainer>
        <Header>Quake Details:</Header>
        <Body>
          Year: {quake.year}
          <br />
          Day: {quake.day}
          <br />
          Time of detection(hour: minute: second): {quake.hour}: {quake.minute}: {quake.seconds}
          <br />
          Location:
          <br />
          &emsp;Latitude: {quake.latitude}
          <br />
          &emsp;Longitude: {quake.longitude}
          <br />
          Magnitude: {quake.magnitude}
          <br />
          Quake Detected by Stations:{' '}
          {Object.keys(quake.station).length === 0
            ? 'Insuffient Data'
            : quake.station.map((st, idx) => {
                return st.value + ' ';
              })}
        </Body>
      </QuakeInfoContainer>
    )
  );
};

export default QuakeInfo;

const QuakeInfoContainer = styled.div`
  color: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
  border: 1px solid #ffffff;
  padding: 1rem;
  font-size: 1.25rem;
`;

const Header = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  margin-left: 1rem;
`;
