/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sanbold: ["SANSATION_BOLD", "cursive"],
                sanitalic: ["SANSATION_ITALIC", "cursive"],
                sanlight: ["SANSATION_LIGHT", "cursive"],
                sanregular: ["SANSATION_REGULAT", "cursive"],
            },
        },
    },
    plugins: [],
};
