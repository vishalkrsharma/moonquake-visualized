import { useDataContext } from '@/hooks/useDataContext';
import React from 'react';
import styles from '@/scss/components/QuakeInfo.module.scss';

const QuakeInfo = () => {
  const { quake } = useDataContext();

  return (
    quake !== null && (
      <div className={styles.quakeInfoContainer}>
        <div className={styles.header}>Quake Details:</div>
        <div className={styles.body}>
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
        </div>
      </div>
    )
  );
};

export default QuakeInfo;
