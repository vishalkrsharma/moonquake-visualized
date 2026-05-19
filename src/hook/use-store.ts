import { create } from 'zustand';

export type PlaceLocation = [number, number, string];
export type LanderLocation = [number, number, number];

export const useStore = create<State>()((set) => ({
  axes: 0,
  directionalLightIntensity: 200,
  ambientLightIntensity: 5,
  wireframe: false,
  heightMap: false,
  apolloLanders: true,
  quake: null,
  places: true,
  camera: [0, 0, 6],

  placesLocation: [
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
  ],

  landerLocation: [
    [1, 23, 11],
    [-3, -23, 12],
    [-3, -17, 14],
    [26, 4, 15],
    [-9, 16, 16],
    [20, 31, 17],
  ],

  set: (partial) => set(partial),
}));
