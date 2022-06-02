module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        letterSpacing: {
            tight: '-0.15em'
        },
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif']
            },
            height: {
                'half-screen' : '50hv'
            }
        },
    },
    plugins: [],
}