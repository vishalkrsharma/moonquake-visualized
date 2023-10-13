import '@/scss/global.scss';

export const metadata = {
  title: 'Moonquake Visualized',
  description: 'Visualized the quakes during the Apollo Missions.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo96.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
