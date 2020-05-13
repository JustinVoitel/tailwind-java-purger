const tailwindcss = require("tailwindcss")
console.log("node: ", process.env.NODE_ENV)

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
   content: ["./output/index.html"],
   /*  whitelist: ['mode-dark'], */
   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

const cssnano = require("cssnano")({
   preset: "default"
})

module.exports = {
   plugins: [
      //tailwindcss("tailwind.config.js"),
      tailwindcss(process.env.TAILWIND_CONFIG),
      // only needed if you want to purge
      ...(process.env.NODE_ENV === "full" ? [] : [purgecss, cssnano])
   ]
}
