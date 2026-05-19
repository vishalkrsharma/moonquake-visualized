import Timeline from '@/components/timeline';
import { useStore } from '@/hook/use-store';
import Link from 'next/link';

const Menu = () => {
  const { axes, wireframe, heightMap, apolloLanders, places, directionalLightIntensity, ambientLightIntensity, set } = useStore();

  return (
    <div className='absolute top-1 left-1 flex items-start flex-col gap-1 text-sm font-semibold'>
      <Link
        className='border border-white px-6 py-3 text-white no-underline hover:underline'
        href='/'
      >
        &lt;Back to Home
      </Link>
      {/* Toggle Table */}
      <table className='px-4 border-collapse'>
        <tbody>
          <tr>
            <td className='w-80'>
              <span>World Axes</span>
              <br />
              &emsp;x-axis : <span className='text-[#de5c00]'>orange</span>
              <br />
              &emsp;y-axis : <span className='text-[#43a30e]'>green</span>
              <br />
              &emsp;z-axis : <span className='text-[#4468fa]'>blue</span>
            </td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ axes: axes === 0 ? 10 : 0 })}
                data-testid='axes-button'
              >
                {axes === 0 ? 'Off' : 'On'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='w-80'>Latitude & Longitude</td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ wireframe: !wireframe })}
              >
                {wireframe ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='w-80'>Height Map</td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ heightMap: !heightMap })}
              >
                {heightMap ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='w-80'>Apollo Landers</td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ apolloLanders: !apolloLanders })}
              >
                {apolloLanders ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
          <tr>
            <td className='w-80'>Seas & Oceans</td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ places: !places })}
              >
                {places ? 'On' : 'Off'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Slider Table */}
      <table>
        <tbody>
          <tr>
            <td className='w-80 p-2.5'>
              <div className='relative mb-2.5'>
                Directional Light Intensity
                <span className='absolute right-0'>{directionalLightIntensity}</span>
              </div>
              <input
                type='range'
                min={0}
                max={400}
                value={directionalLightIntensity}
                onChange={(e) => set({ directionalLightIntensity: Number(e.target.value) })}
                className='w-full'
                data-testid='slider'
              />
            </td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ directionalLightIntensity: 200 })}
              >
                Reset
              </button>
            </td>
          </tr>
          <tr>
            <td className='w-80 p-2.5'>
              <div className='relative mb-2.5'>
                Ambient Light Intensity &emsp;
                <span className='absolute right-0'>{ambientLightIntensity}</span>
              </div>
              <input
                type='range'
                min={1}
                max={10}
                value={ambientLightIntensity}
                onChange={(e) => set({ ambientLightIntensity: Number(e.target.value) })}
                className='w-full'
                data-testid='slider'
              />
            </td>
            <td>
              <button
                className='menu-button'
                onClick={() => set({ ambientLightIntensity: 5 })}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Timeline />
    </div>
  );
};

export default Menu;
