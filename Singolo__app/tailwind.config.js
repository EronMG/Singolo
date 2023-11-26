/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            primary: "#666D89",
            secondary: "#767E9E",
            dimWhite: "#F0D8D9",
            orange: "#F06C64",
        },
        fontFamily: {
            lato: ["Lato", "sans-serif"],
        },
    },
    screens: {
        smd: "319px",
        xs: "480px",
        bs: "538px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xl: "1700px",
    },
};
export const plugins = [];