const QuakeDetails = ({ quake }: { quake: Quake }) => {
  const timeStr = `${String(quake.hour).padStart(2, '0')}:${String(quake.minute).padStart(2, '0')}:${String(quake.seconds).padStart(2, '0')}`;
  const stations = quake.station.length > 0 ? quake.station.map((st: QuakeStation) => st.value).join(', ') : 'Insufficient data';

  return (
    <div className='absolute top-2 right-2 min-w-60 border border-white bg-black backdrop-blur-md text-white text-sm'>
      <div className='text-lg text-center font-semibold border-b border-white px-5 py-4'>Quake details</div>
      <div className='flex flex-col gap-1.5 px-5 py-4'>
        <Row
          label='Year'
          value={quake.year}
        />
        <Row
          label='Day'
          value={quake.day}
        />
        <Row
          label='Time'
          value={timeStr}
        />
        <Row
          label='Latitude'
          value={`${quake.latitude}° N`}
        />
        <Row
          label='Longitude'
          value={`${quake.longitude}° E`}
        />
        <Row
          label='Magnitude'
          value={String(quake.magnitude)}
        />
        <Row
          label='Stations'
          value={stations}
        />
      </div>
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between gap-4'>
    <span className='text-white/60 whitespace-nowrap'>{label}</span>
    <span className='font-medium text-right'>{value}</span>
  </div>
);

export default QuakeDetails;
