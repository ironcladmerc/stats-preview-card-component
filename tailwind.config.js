/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // Example changes to theme. This will replace all of the tailwindcss colors, fonts, weights, etc.
        // It can be useful to put these in the main theme section if you don't want the clutter of
        // all the delivered tailwindcss classes in the intellisense plugin. If you do want them,
        // these sections can be moved inside the extend area to extend tailwind and add these instead of
        // replacing them
        // sets the breakpoints
        // screens: {
        //   sm: "375px",
        //   md: "1440px",
        // },
        // sets the colors, these become available for example as bg-[colorname]
        colors: {
            softViolet: "hsl(277, 64%, 61%)",
            veryDarkBlue: "hsl(233, 47%, 7%)",
            darkDesaturatedBlue: "hsl(244, 38%, 16%)",
            white: "hsl(0, 0%, 100%)",
            slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
            slightlyTransparentWhiteHeadings: "hsla(0, 0%, 100%, 0.6)",
        },
        // sets the available fonts. use this in conjunction with the import in the globals.css to bring in Google Fonts
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            lexendDeca: ["Lexend Deca", "sans-serif"],
        },
        // sets the available font weights. Set these to the weights that your google fonts use, or to the weights that you want to use if you
        // are importing them all
        fontWeight: {
            regular: "400",
            bold: "700",
        },
        // sets the letter spacing, this can allow you to override the delivered spacing
        letterSpacing: {
            widest: ".15em",
        },
        extend: {
            // adds a height attribute so you can use this as h-128 for example
            // height: {
            //   128: "32rem",
            // },
            fontSize: {
                xxs: ".6rem",
            },
        },
    },
    plugins: [],
}
