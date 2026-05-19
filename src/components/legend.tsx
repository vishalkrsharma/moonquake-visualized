import Image from 'next/image';

const Legend = () => {
  return (
    <div className='absolute bottom-8 right-2 h-100 w-32 text-sm'>
      <div
        className='absolute -top-3 left-0'
        data-testid='label'
      >
        +1000m
      </div>
      <div
        className='absolute -bottom-3 left-0'
        data-testid='label'
      >
        -1000m
      </div>
      <Image
        width={40}
        height={250}
        className='absolute right-2 h-full brightness-80'
        src='/assets/legend.png'
        alt='Legend Image'
      />
    </div>
  );
};

export default Legend;
