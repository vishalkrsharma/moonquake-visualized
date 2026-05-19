declare interface Quake {
  _id: string;
  year: string;
  day: string;
  hour: string;
  minute: string;
  seconds: string;
  latitude: number;
  longitude: number;
  magnitude: number;
  station: QuakeStation[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

declare interface QuakeStation {
  value: string;
  label: string;
}

declare interface State {
  axes: number;
  directionalLightIntensity: number;
  ambientLightIntensity: number;
  wireframe: boolean;
  heightMap: boolean;
  apolloLanders: boolean;
  quake: Quake | null;
  places: boolean;
  camera: [number, number, number];
  placesLocation: PlaceLocation[];
  landerLocation: LanderLocation[];
  set: (partial: Partial<Omit<State, 'set'>>) => void;
}

declare interface Developer {
  name: string;
  img: string;
  alt: string;
  linkedin: string;
  github: string;
}