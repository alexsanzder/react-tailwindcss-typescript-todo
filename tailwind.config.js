module.exports = {
    // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
    // https://tailwindcss.com/docs/just-in-time-mode
    mode: "jit",
    theme: {
        extend: {
            backgroundImage: () => ({
                hero: "url('https://images.unsplash.com/photo-1487948210905-da92f3980d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&h=448&q=80')",
            }),
        },
        linearBorderGradients: (theme) => ({
            colors: theme("colors"),
            background: theme("colors"),
        }),
    },
    variants: {},
    plugins: [
        require("@tailwindcss/custom-forms"),
        require("tailwindcss-border-gradients"),
    ],
    purge: {
        // Filenames to scan for classes
        content: [
            "./src/**/*.html",
            "./src/**/*.js",
            "./src/**/*.jsx",
            "./src/**/*.ts",
            "./src/**/*.tsx",
            "./public/index.html",
        ],
        // Options passed to PurgeCSS
        options: {
            // Whitelist specific selectors by name
            // safelist: [],
        },
    },
};
