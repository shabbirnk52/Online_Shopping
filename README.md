# Frontend Template HTML | BOOTSTRAP + GULP STARTER TEMPLATE

![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-712cf9)
![Gulp Badge](https://img.shields.io/badge/Gulp-cf4647)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Template Project can be used to fork or use as template for other projects.

> :warning: This Repository should be used as a template.
> This readme file will be updated to provide more information about all the latest updates and changes that can be done.

## Build Process

Follow these steps to build the project locally:

### Prerequisites

Make sure you have Node.js (21.2.0+) and npm installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/adilasif-io/Frontend-Template.git
cd Frontend-Template
```

### Install Dependencies

```bash
npm install
```

### Run development server

```bash
gulp dev
```

### OR Run Production Process

```bash
gulp prod
```

> :warning: THIS SECTION WILL BE UPDATED

### Notes

Changes should be commited to `src` files only.

The `dist` folder is not kept in source control.

### How to use

The template is built with Sass and Gulp build system with these features:

- Handlebars HTML templates with Panini – a super simple flat file generator for use with Gulp. It compiles a series of HTML pages using a common layout. These pages can also include HTML partials, external Handlebars helpers, or external data as JSON or YAML.
- Sass compilation, prefixing with autoprefixer, and javaScript concatenation
- Built-in BrowserSync server - will automatically reload your page when files are changed. It also live-injects CSS changes when you save a Sass file. This task runs continuously and defaults to localhost.
- For production builds - CSS compression, JavaScript compression, Image compression and more.

### Folder Structure:

- `dist/` - compiled distribution files
- `node_modules` - front-end dependencies
- `src/` - contains all of your core, working files—static assets, pages, templates, etc
- `src/assets/` - scss files, JS files, images, and fonts
- `src/data/` - external data (JSON or YAML)
- `src/layouts/` - HTML layouts templates
- `src/pages/` - site pages
- `src/partials/` - handlebars partials files.
- `translation/` - Allows Translation of text to Arabic in RTL HTML files.
- `Reports/` - Auto Generated Lighthouse reports. Generated on gulp prod.
- `gulpfile.js` - all task definitions
- `package.json` - handles the project dependencies
- `.htmllintrc` - handles the HTML lint rules
- `.sass-lint.yml` - handles the SCSS lint rules
- `reports` - txt generated file for accessibility issues

### Includes:

- [Fontawesome 6](https://fontawesome.com/)
- [Animate CSS](https://animate.style/)
- [RTL Support](https://github.com/tysonmatanich/directional-scss)

### Gulp Plugins:

- [gulp-accessibility](https://www.npmjs.com/package/gulp-accessibility)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-compile-handlebars](https://www.npmjs.com/package/gulp-compile-handlebars)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-cssmin](https://www.npmjs.com/package/gulp-cssmin)
- [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages)
- [gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace)
- [gulp-htmllint](https://www.npmjs.com/package/gulp-htmllint)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
- [gulp-newer](https://www.npmjs.com/package/gulp-newer)
- [gulp-pretty-html](https://www.npmjs.com/package/gulp-pretty-html)
- [gulp-purgecss](https://www.npmjs.com/package/gulp-purgecss)
- [gulp-remove-code](https://www.npmjs.com/package/gulp-remove-code)
- [gulp-remove-logging](https://www.npmjs.com/package/gulp-remove-logging)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-sass-lint](https://www.npmjs.com/package/gulp-sass-lint)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-babel](https://www.npmjs.com/package/gulp-babel)

### Additional Resources:

- [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Panini](https://github.com/zurb/panini)
- [Gulp](https://gulpjs.org/getting-started)
- [anime](https://github.com/juliangarnier/anime)
- [AOS](https://github.com/michalsnik/aos/tree/v2)

### License

[MIT](LICENSE)

### Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>  
    <td align="center"><a href="https://github.com/adilasif-io"><img src="https://avatars.githubusercontent.com/u/98095445?v=4" width="100px;" alt=""/><br /><sub><b>adilasif-io</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
