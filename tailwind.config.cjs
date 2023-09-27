const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontSize: {
                caption: '.72rem'
            },
            fontFamily: {
                sans: ['"MontserratVariable"', ...defaultTheme.fontFamily.sans]
            },
            screens: {
                lg: '1152px',
                xl: '1408px'
            },
            backgroundImage: {
                hero: 'url(/assets/image/hero.webp)',
                'hero-lg': 'url(/assets/image/hero-lg.webp)',
                'about-anime-destiny': 'url(/assets/image/about/anime_destiny.webp)',
                heroAD: 'url(/assets/image/heroAD.webp)'
            }
        }
    },
    plugins: []
}
