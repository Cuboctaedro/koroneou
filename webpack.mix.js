const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.setPublicPath("assets");

mix.js('src/app.js', 'assets/').sass("src/app.scss", "assets/")
.options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
})
.version();
