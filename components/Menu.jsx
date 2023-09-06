import { FC } from 'react';
import styled from 'styled-components';
import Timeline from './Timeline';
import { useDataContext } from '@/hooks/useDataContext';

const Menu = () => {
  const {
    axes,
    setAxes,
    wireframe,
    setWireframe,
    heightMap,
    setHeightMap,
    apolloLanders,
    setApolloLanders,
    places,
    setPlaces,
    directionalLightIntensity,
    setDirectionalLightIntensity,
    ambientLightIntensity,
    setAmbientLightIntensity,
  } = useDataContext();

  return (
    <MenuContainer>
      <Table className='table__1'>
        <tbody>
          <tr>
            <Info>
              World Axes
              <br />
              &emsp;x-axis : <Orange>orange</Orange>
              <br />
              &emsp;y-axis : <Green>green</Green>
              <br />
              &emsp;z-axis : <Blue>blue</Blue>
            </Info>
            <td>
              <Button
                onClick={() => {
                  setAxes(axes === 0 ? 10 : 0);
                }}
              >
                {axes === 0 ? 'Off' : 'On'}
              </Button>
            </td>
          </tr>
          <tr>
            <Info>Latitude & Longitude</Info>
            <td>
              <Button
                onClick={() => {
                  setWireframe(!wireframe);
                }}
              >
                {wireframe === true ? 'On' : 'Off'}
              </Button>
            </td>
          </tr>
          <tr>
            <Info>Height Map</Info>
            <td>
              <Button
                onClick={() => {
                  setHeightMap(!heightMap);
                }}
              >
                {heightMap === true ? 'On' : 'Off'}
              </Button>
            </td>
          </tr>
          <tr>
            <Info>Apollo Landers</Info>
            <td>
              <Button
                onClick={() => {
                  setApolloLanders(!apolloLanders);
                }}
              >
                {apolloLanders === true ? 'On' : 'Off'}
              </Button>
            </td>
          </tr>
          <tr>
            <Info>Seas & Oceans</Info>
            <td>
              <Button
                onClick={() => {
                  setPlaces(!places);
                }}
              >
                {places === true ? 'On' : 'Off'}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table className='table__2'>
        <tbody>
          <tr>
            <Info>
              <Data>
                Directional Light Intensity
                <span>{directionalLightIntensity}</span>
              </Data>
              <input
                type='range'
                min={0}
                max={400}
                value={directionalLightIntensity}
                onChange={(event) => {
                  setDirectionalLightIntensity(event.target.value);
                }}
              />
            </Info>
            <td>
              <Button
                onClick={() => {
                  setDirectionalLightIntensity(50);
                }}
              >
                Reset
              </Button>
            </td>
          </tr>
          <tr>
            <Info>
              <Data>
                Ambient Light Intensity &emsp;
                <span>{ambientLightIntensity}</span>
              </Data>
              <input
                type='range'
                min={1}
                max={10}
                value={ambientLightIntensity}
                onChange={(event) => {
                  setAmbientLightIntensity(event.target.value);
                }}
              />
            </Info>
            <td>
              <Button
                onClick={() => {
                  setAmbientLightIntensity(3);
                }}
              >
                Reset
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Timeline />
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: absolute;
  top: 4.25rem;
  left: 0rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem;
  font-size: 1.25rem;
`;

const Table = styled.table`
  .table {
    &__1 {
    }
    &__2 {
      tr {
        .td__info {
          padding: 10px;
          .data {
            margin-bottom: 10px;
          }
          input {
            width: 100%;
          }
        }
      }
    }

    padding: 0.25rem 1rem;
    border-collapse: collapse;
  }
`;

const Blue = styled.span`
  color: #4468fa;
`;

const Orange = styled.span`
  color: #de5c00;
`;

const Green = styled.span`
  color: #43a30e;
`;

const Info = styled.td`
  width: 25rem;
`;

const Button = styled.button`
  padding: 0.4rem 0rem;
  width: 5.4rem;
  margin: 0.2rem;
  border: none;
  border-radius: 0.5rem;
`;

const Data = styled.div`
  span {
    position: absolute;
    right: 0;
  }
  position: relative;
`;
