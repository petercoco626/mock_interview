import localFont from 'next/font/local';

export const suitFont = localFont({
  preload: true,
  src: [
    {
      path: '../assets/fonts/SUIT-ExtraBold.otf',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../assets/fonts/SUIT-Bold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/SUIT-Medium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/SUIT-Thin.otf',
      style: 'normal',
      weight: '100',
    },
  ],
});

export const gmarketSansFont = localFont({
  preload: true,
  src: [
    {
      path: '../assets/fonts/GmarketSansBold.otf',
      style: 'normal',
      weight: '700',
    },
  ],
});
