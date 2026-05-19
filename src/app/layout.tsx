import { victorMono } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moonquake Visualized',
  description: 'Visualized the quakes during the Apollo Missions.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo96.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${victorMono.variable} font-victor-mono h-screen antialiased`}
    >
      <body className=''>{children}</body>
    </html>
  );
}
