/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-color': '#FAFAFA',
                'bg-surface': '#FFFFFF',
                'bg-subtle': '#F5F5F4', // Warm subtle grey/brown tint
                'text-primary': '#0F172A',
                'text-secondary': '#475569',
                'accent-color': '#8D6E63', // Lighter Espresso/Mocha
                'accent-hover': '#6D4C41',
                'accent-light': '#EFEBE9', // Very light tint for backgrounds
                'border-color': '#E2E8F0',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'], // Default sans to Inter
                'chillax': ['Chillax', 'sans-serif'], // Keep existing if needed, or replace if user wants pure Inter. User said "Apply Inter... strong hierarchy". keeping Chillax for headings might conflict with "Apply Inter". User said "Apply Inter... with strong hierarchy: bold hero headline". I will prioritize Inter for now as primary content font, maybe keep Chillax for specific decorative if consistent, but user said "minimal... senior-engineer... Raycast". Raycast is all sans. I'll stick to Inter as main. I will keep Chillax defined but maybe not use it as default for everything to follow "Apply Inter". Actually, "Apply Inter... with strong hierarchy". I'll make Inter the default 'sans'.
            },
            padding: {
                'container': '2rem',
            },
        },
    },
    plugins: [],
}
