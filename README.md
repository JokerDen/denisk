# Denis Kazantsev GitHub Pages Site

Simple GitHub Pages site for Denis Kazantsev, built with standard GitHub Pages Jekyll processing.

There is no custom domain configured.

## Project Structure

- `index.md` - the page content in Markdown.
- `_config.yml` - GitHub Pages / Jekyll configuration.
- `_layouts/default.html` - one-column page layout.
- `assets/css/site.css` - lightweight site styling.

## Run Locally

Local preview is optional. Use Homebrew Ruby or another user-managed Ruby, not the macOS system Ruby.

```bash
bundle install
bundle exec jekyll serve
```

Then visit:

```text
http://localhost:4000/denisk/
```

GitHub Pages will build the Markdown page through Jekyll after push.

## Deploy To GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open `Settings` -> `Pages`.
3. Under `Build and deployment`, select `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder.
5. Save the settings.
6. After the first deploy finishes, the site should be available at:

```text
https://jokerden.github.io/denisk/
```

The site uses standard GitHub Pages Jekyll processing from the repository root.

## Editing Guide

- Main page text: edit `index.md`.
- Rates: edit the `Indicative Rates` section in `index.md`.
- Email and LinkedIn: edit the `Contact` section in `index.md`.
- Site title/description/theme: edit `_config.yml`.

## Notes

- Keep the public page concise and B2B-focused.
- Rates are written as indicative and excluding VAT where applicable.
- No external tracking is included by default.
