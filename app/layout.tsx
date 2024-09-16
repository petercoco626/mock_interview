import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-dvh">
        <main className="w-full max-w-[800px] h-full p-4 box-border mx-auto bg-slate-700">
          {children}
        </main>
      </body>
    </html>
  );
}
