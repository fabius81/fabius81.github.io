# Fabio Di Paolo — Professional Portfolio

A bilingual, responsive professional portfolio built with Next.js and Tailwind CSS and configured for GitHub Pages.

## Features

- English landing page with instant EN/IT language switching
- Light and dark themes with saved preferences
- Responsive single-page layout
- Anchor navigation
- Experience timeline, selected projects, capabilities and contact section
- Downloadable English and Italian CVs
- Static export for GitHub Pages
- Ready for a future custom domain such as `fabiodipaolo.com`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static website is generated in the `out` folder.

## Add your CV files

Replace the two placeholder files inside `public/cv` with your actual PDFs, keeping these names:

- `Fabio_Di_Paolo_Resume_EN.pdf`
- `Fabio_Di_Paolo_CV_IT.pdf`

## Deploy on GitHub Pages

1. Create or use the public repository `fabius81.github.io`.
2. Copy all project files to the repository.
3. Add the included GitHub Actions workflow.
4. Push to the `main` branch.
5. In GitHub, open **Settings → Pages**.
6. Under **Build and deployment**, choose **GitHub Actions**.

The website will be published at `https://fabius81.github.io`.

## Personal details to verify

Before publishing, verify:

- LinkedIn URL in `app/page.tsx`
- Email address in `app/page.tsx`
- Role dates and wording
- CV PDF filenames and content
