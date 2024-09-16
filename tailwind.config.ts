import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'system-green-light': '#00BFBF',
        'system-green': '#007D7D',
        'system-green-dark': '#005C5C',
        'system-gray': '#CECECE',
      },
      fontSize: {
        xs_thin: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        s_thin: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        m_thin: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        l_thin: [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xl_thin: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xxl_thin: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xxxl_thin: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 100,
          },
        ],
        xs_bold: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        s_bold: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        m_bold: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        l_bold: [
          '18px', // font size
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xl_bold: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xxl_bold: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xxxl_bold: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        xs_medium: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        s_medium: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        m_medium: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        l_medium: [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xl_medium: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xxl_medium: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xxxl_medium: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 500,
          },
        ],
        xs_light: [
          '11px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        s_light: [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        m_light: [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        l_light: [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        xl_light: [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        xxl_light: [
          '22px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        xxxl_light: [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        p_m_light: [
          '16px',
          {
            lineHeight: '155%',
            fontWeight: 300,
          },
        ],
        p_s_light: [
          '13px',
          {
            lineHeight: '155%',
            fontWeight: 300,
          },
        ],
      },
      fontFamily: {
        SUIT: 'suit',
      },
    },
  },
  plugins: [],
};
export default config;
