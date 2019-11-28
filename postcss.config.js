const tailwindcss = require("tailwindcss");

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./output/index.html"],
  /*  whitelist: ['mode-dark'], */
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = {
  plugins: [
    //tailwindcss("tailwind.config.js"),
    tailwindcss(process.env.TAILWIND_CONFIG),
    // only needed if you want to purge
    ...[purgecss, cssnano]
  ]
};
