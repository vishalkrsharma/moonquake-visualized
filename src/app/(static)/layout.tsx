import Navbar from '@/components/navbar';

const StaticLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default StaticLayout;
