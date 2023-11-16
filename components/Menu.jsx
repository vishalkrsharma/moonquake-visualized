import { useDataContext } from '@/hooks/useDataContext';
import styles from '@/scss/components/Menu.module.scss';

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
    <div className={styles.menuContainer}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.info}>
              <span>World Axes</span>
              <br />
              &emsp;x-axis : <span className={styles.orange}>orange</span>
              <br />
              &emsp;y-axis : <span className={styles.green}>green</span>
              <br />
              &emsp;z-axis : <span className={styles.blue}>blue</span>
            </td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setAxes(axes === 0 ? 10 : 0);
                }}
                data-testid='axes-button'
              >
                {axes === 0 ? 'Off' : 'On'}
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>Latitude & Longitude</td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setWireframe(!wireframe);
                }}
              >
                {wireframe === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>Height Map</td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setHeightMap(!heightMap);
                }}
              >
                {heightMap === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>Apollo Landers</td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setApolloLanders(!apolloLanders);
                }}
              >
                {apolloLanders === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>Seas & Oceans</td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setPlaces(!places);
                }}
              >
                {places === true ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table__slider}>
        <tbody>
          <tr>
            <td className={styles.info}>
              <div className={styles.data}>
                Directional Light Intensity
                <span>{directionalLightIntensity}</span>
              </div>
              <input
                type='range'
                min={0}
                max={400}
                value={directionalLightIntensity}
                onChange={(event) => {
                  setDirectionalLightIntensity(event.target.value);
                }}
                data-testid='slider'
              />
            </td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setDirectionalLightIntensity(50);
                }}
              >
                Reset
              </button>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>
              <div className={styles.data}>
                Ambient Light Intensity &emsp;
                <span>{ambientLightIntensity}</span>
              </div>
              <input
                type='range'
                min={1}
                max={10}
                value={ambientLightIntensity}
                onChange={(event) => {
                  setAmbientLightIntensity(event.target.value);
                }}
                data-testid='slider'
              />
            </td>
            <td>
              <button
                className={styles.button}
                onClick={() => {
                  setAmbientLightIntensity(3);
                }}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
