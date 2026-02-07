/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-color': '#ffffff',
                'bg-surface': '#fafafa',
                'text-primary': '#18181b',
                'text-secondary': '#71717a',
                'accent-color': '#2563eb',
                'border-color': '#e4e4e7',
            },
            fontFamily: {
                'chillax': ['Chillax', 'sans-serif'],
                'lexend': ['Lexend', 'sans-serif'],
            },
            padding: {
                'container': '2rem',
            },
        },
    },
    plugins: [],
}
