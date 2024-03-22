import { useState } from 'react';

import styles from '@/scss/components/Timeline.module.scss';
// import QuakeData from '@/data/QuakeData';
import { useDataContext } from '@/hooks/useDataContext';

const Timeline = ({ QuakeData }) => {
  const { quake, setQuake, setCamera } = useDataContext();
  const [year, setYear] = useState(null);
  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  const years = Array.from(new Set(QuakeData?.map((items) => items.year)));

  return (
    <>
      <div className={styles.timelineContainer}>
        <select
          className={styles.select}
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
        </select>
        <select
          className={styles.select}
          onChange={(event) => setQuake(QuakeData.filter((items) => items.id === event.target.value)[0])}
        >
          <option value=''>&#60;Day&#62;</option>
          {QuakeData?.filter((items) => items.year === year).map((item, index) => {
            return (
              <option
                className='timeline__label__list'
                key={index}
                value={item.id}
              >
                {item.day}
              </option>
            );
          })}
        </select>
        <button
          className={styles.apply}
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
        </button>
      </div>
    </>
  );
};

export default Timeline;
