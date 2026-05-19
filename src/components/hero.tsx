import Link from 'next/link';

const Hero = () => {
  return (
    <div className='absolute left-0 top-0 z-1 flex h-screen w-screen flex-col items-center justify-center'>
      <div className='m-4 text-center'>
        <h1 className='text-[40px] font-semibold leading-18'>MOONQUAKE VISUALIZED</h1>
        <h2 className='text-xl font-medium'>VISUALIZING THE MOON SINCE 1969</h2>
      </div>
      <div className='flex items-center justify-center gap-8 text-xl'>
        <Link
          href='/simulation'
          className='mx-[0.2rem] font-medium my-4 no-underline hover:underline'
        >
          &lt; Visit Moon &gt;
        </Link>
      </div>
    </div>
  );
};

export default Hero;
