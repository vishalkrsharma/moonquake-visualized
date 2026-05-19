import { useEffect, useState } from 'react';
import QuakeData from '@/data/quake-data.json';
import { useStore } from '@/hook/use-store';

const degToRad = (deg: number) => (deg * Math.PI) / 180.0;

const Timeline = () => {
  const [mounted, setMounted] = useState(false);
  const { quake, set } = useStore();
  const [day, setDay] = useState<string>('');
  const [year, setYear] = useState<string | null>(null);

  const years = Array.from(new Set(QuakeData?.map((item) => item.year)));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleApply = () => {
    const q = quake as { latitude: number; longitude: number } | null;
    set({
      camera:
        q !== null
          ? [
              6 * Math.sin(Math.PI / 2 - degToRad(q.latitude)) * Math.sin(degToRad(q.longitude)),
              6 * Math.cos(Math.PI / 2 - degToRad(q.latitude)),
              6 * Math.sin(Math.PI / 2 - degToRad(q.latitude)) * Math.cos(degToRad(q.longitude)),
            ]
          : [0, 0, 6],
    });
  };

  if (!mounted) return null;

  return (
    <div className='flex items-center gap-2'>
      <select
        className='flex-1 h-10 bg-black text-white border border-white px-4 outline-none'
        onChange={(e) => {
          setDay('');
          set({ quake: null });
          setYear(e.target.value);
        }}
      >
        <option
          value=''
          hidden
        >
          &lt;Year&gt;
        </option>
        {years.map((year, idx) => (
          <option
            key={idx}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>

      <select
        className='flex-1 h-10 bg-black text-white border border-white px-4 outline-none disabled:opacity-40 disabled:cursor-not-allowed'
        disabled={!mounted || !year}
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
          set({ quake: QuakeData.find((item) => item._id === e.target.value) ?? null });
        }}
      >
        <option
          value=''
          hidden
        >
          &lt;Day&gt;
        </option>
        {QuakeData?.filter((item) => item.year === year).map((item, idx) => (
          <option
            key={idx}
            value={item._id}
          >
            {item.day}
          </option>
        ))}
      </select>

      <button
        className='apply-button'
        onClick={handleApply}
        disabled={!mounted || quake === null}
      >
        Apply
      </button>
    </div>
  );
};

export default Timeline;
