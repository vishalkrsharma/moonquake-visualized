import { useEffect, useState } from 'react';
import styled from 'styled-components';
import QuakeData from '@/data/QuakeData';
import { useDataContext } from '@/hooks/useDataContext';

const Timeline = () => {
  const { quake, setQuake, setCamera } = useDataContext();
  const [year, setYear] = useState(null);
  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  const years = Array.from(new Set(QuakeData.map((items) => items.year)));

  return (
    <>
      <TimelineContainer>
        <Select
          onChange={(event) => {
            setQuake(null);
            setYear(event.target.value);
          }}
        >
          <option value={null}>&#60;Year&#62;</option>
          {years.map((year, index) => {
            return (
              <option
                key={index}
                value={year}
              >
                {year}
              </option>
            );
          })}
        </Select>
        <Select onChange={(event) => setQuake(QuakeData.filter((items) => items._id === event.target.value)[0])}>
          <option value=''>&#60;Day&#62;</option>
          {QuakeData.filter((items) => items.year === year).map((item, index) => {
            return (
              <option
                className='timeline__label__list'
                key={index}
                value={item._id}
              >
                {item.day}
              </option>
            );
          })}
        </Select>
        <Apply
          onClick={() =>
            setCamera(
              quake !== null
                ? [
                    6 * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.sin(degToRad(quake.longitude)),
                    6 * Math.cos(Math.PI / 2 - degToRad(quake.latitude)),
                    6 * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.cos(degToRad(quake.longitude)),
                  ]
                : [0, 0, 0]
            )
          }
        >
          Apply
        </Apply>
      </TimelineContainer>
    </>
  );
};

export default Timeline;

const TimelineContainer = styled.div`
  position: absolute;
  top: 33rem;
  left: 0;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 1.25rem;
  @-moz-document url-prefix() {
    top: 33.5rem;
  }
`;

const Select = styled.select`
  flex-grow: 100;
  background: #000000;
  color: #ffffff;
  height: 3.6rem;
  border: 1px solid #ffffff;
  outline: none;
  font-size: 1rem;
  padding: 0 1rem;
  font-size: 1.25rem;
`;

const Apply = styled.button`
  padding: 0.6rem 0.5rem;
  width: 8rem;
  margin: 0.2rem;
  border: none;
  border-radius: 0.5rem;
  @-moz-document url-prefix() {
    padding: 0.5rem 1rem;
  }
`;
