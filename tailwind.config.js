/** @type {import('tailwindcss').Config} */

const config = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "eagle-red": "#fd2844",
                "eagle-orange": "#fdb000",
            },
        },
    },
    plugins: [],
}

export default config
