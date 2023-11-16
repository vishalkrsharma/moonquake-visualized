'use client';

import { createContext, useState } from 'react';

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
  const [axes, setAxes] = useState(0);
  const [directionalLightIntensity, setDirectionalLightIntensity] = useState(200);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(5);
  const [wireframe, setWireframe] = useState(false);
  const [heightMap, setHeightMap] = useState(false);
  const [apolloLanders, setApolloLanders] = useState(true);
  const [quake, setQuake] = useState(null);
  const [places, setPlaces] = useState(true);
  const [camera, setCamera] = useState([0, 0, 6]);

  const placesLocation = [
    [10, 23.43, 'Mare Tranquillitatis'],
    [38.28, -20, 'Mare Imbrium'],
    [15, 3.6, 'Mare Vaporum'],
    [8.5, -30.9, 'Mare Insularum'],
    [30, 12.5, 'Mare Serenitatis'],
    [20, 55.1, 'Mare Crisium'],
    [-18.3, -19.6, 'Mare Nubium'],
    [-10.2, 30.6, 'Mare Nectaris'],
    [-0.8, 45.3, 'Mare Fecunditatis'],
    [-20.4, -43.6, 'Mare Humorum'],
    [-7.5, -26.3, 'Mare Cognitum'],
    [16.4, -59.4, 'Oceanus Procellarum'],
  ];

  const landerLocation = [
    [1, 23, 11],
    [-3, -23, 12],
    [-3, -17, 14],
    [26, 4, 15],
    [-9, 16, 16],
    [20, 31, 17],
  ];

  return (
    <DataContext.Provider
      value={{
        axes,
        setAxes,
        directionalLightIntensity,
        setDirectionalLightIntensity,
        ambientLightIntensity,
        setAmbientLightIntensity,
        wireframe,
        setWireframe,
        heightMap,
        setHeightMap,
        apolloLanders,
        setApolloLanders,
        quake,
        setQuake,
        places,
        setPlaces,
        camera,
        setCamera,
        landerLocation,
        placesLocation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
