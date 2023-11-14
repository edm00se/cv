# EM CV

Built from [alexanderhodes/astro-minimal-cv](https://github.com/alexanderhodes/astro-minimal-cv).

## Commands

```bash
# install all dependencies
$ npm install
# start dev server
$ npm run dev
# builds the app and publishes it into `dist` folder
$ npm run build
# preview the app that was built
$ npm run preview
```

## Project structure

The project is structured in `components` and `pages`. Currently, only the index page is existing which contains all information about the CV.

In components, three main components are located. `RowEntry` is used for displaying a row in the table. `SectionTitle` provides the heading for a section containing one or more rows. And `SocialIcon` is used for displaying the social icons in the footer.
