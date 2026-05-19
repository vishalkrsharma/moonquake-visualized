import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='absolute left-0 top-0 z-2 w-screen'>
      <div className='container mx-auto px-4 py-10 flex items-center justify-between'>
        <Link
          className='text-xl font-bold no-underline hover:underline'
          href='/'
        >
          Home
        </Link>
        <Link
          className='text-xl font-bold no-underline hover:underline'
          href='/about'
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
