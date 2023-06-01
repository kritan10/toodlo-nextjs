/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['var(--font-worksans)'],
            serif: ['var(--font-worksans)'],
        },
        extend: {
            colors: {
                bg: '#fafafa',
                text: '#3c3c3e',
                alt: '#e6f3ef',
                main: '#4285f4',
                accent: '#fbbc04',
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *')
            addVariant('child-hover', '& > *:hover')
        },
    ],
}
