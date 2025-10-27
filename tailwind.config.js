/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla
      sm: { max: '640px' }, // móvil
      md: { min: '641px', max: '768px' }, // tablet
      lg: { min: '769px', max: '1024px' }, // laptop
      xl: { min: '1025px', max: '1280px' }, // desktop
      '2xl': { min: '1281px' } // desktop
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      // primary green
      'primary-green': '#BEC624',
      'primary-green-80': '#CBD150',
      'primary-green-60': '#D8DD7C',
      'primary-green-40': '#E5E8A7',
      'primary-green-20': '#F2F4D3',
      'primary-green-10': '#F8F9E9',
      // primary blue
      'primary-blue': '#072339',
      'primary-blue-90': '#06233A',
      'primary-blue-80': '#384F61',
      'primary-blue-60': '#6A7B89',
      'primary-blue-40': '#9BA7B0',
      'primary-blue-20': '#CDD3D8',
      'primary-blue-10': '#E6E9EB',
      // secondary aqua
      'secondary-aqua': '#06BBCE',
      'secondary-aqua-80': '#38C9D8',
      'secondary-aqua-60': '#6AD6E2',
      'secondary-aqua-40': '#9BE4EB',
      'secondary-aqua-20': '#CDF1F5',
      'secondary-aqua-10': '#E6F8FA',
      // secondary yellow
      'secondary-yellow': '#FFCA3C',
      'secondary-yellow-80': '#FFD563',
      'secondary-yellow-60': '#FFDF8A',
      'secondary-yellow-40': '#FFEAB1',
      'secondary-yellow-20': '#FFF4DD',
      'secondary-yellow-10': '#FFFAEB',
      // red
      red: '#D1223F',
      'red-80': '#DA4E65',
      'red-60': '#E37A8C',
      'red-40': '#EDA7B2',
      'red-20': '#F6D3D9',
      'red-10': '#FAE8EB',
      // error
      'error-100': '#BD0C33',
      'error-80': '#E02F48',
      'error-60': '#FF5263',
      'error-40': '#FF888D',
      'error-20': '#FFB3B4',
      'error-10': '#FFDAD9',
      'error-05': '#FFEDEC',
      // white
      gray: '#EAECEE',
      'gray-80': '#D2D2D2',
      'gray-60': '#F8F8F9',
      'gray-40': '#FAFAFA',
      'gray-20': '#FDFDFD',
      'gray-10': '#F8F8F9',
      stone: '#F8F8F9',
      'scrollbar-thumb': '#3490dc',
      'scrollbar-track': '#f1f5f9'
    },
    fontSize: {
      // tamaños de letras con su espaciador entre lineas
      sm: ['0.875rem', { lineHeight: '1.1' }],
      base: ['1rem', { lineHeight: '1.2' }],
      lg: ['1.125rem', { lineHeight: '1.3' }],
      xl: ['1.25rem', { lineHeight: '1.4' }],
      '2xl': ['1.5rem', { lineHeight: '1.5' }],
      '3xl': ['1.875rem', { lineHeight: '1.5' }],
      '4xl': ['2.25rem', { lineHeight: '1.6' }],
      '5xl': ['3rem', { lineHeight: '1.6' }],
      '6xl': ['3.75rem', { lineHeight: '1.7' }],
      '7xl': ['4.5rem', { lineHeight: '1.7' }],
      '8xl': ['6rem', { lineHeight: '1.7' }],
      '9xl': ['8rem', { lineHeight: '1.8' }]
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        'Long-Cang': ['Long Cang', 'sans-serif'],
        'Marck-Script': ['Marck Script', 'sans-serif']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animate')
  ]
}
