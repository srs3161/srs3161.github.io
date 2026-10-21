# Satyendra Raj Singh — Personal Portfolio

Live public website: https://satyendra-raj-singh

## What you have

This is a complete static website. No framework, database, package installation, or build step is needed.

- index.html: all website content, navigation, project descriptions, and contact links.
- styles.css: colors, fonts, spacing, and responsive layout.
- Satyendra_Raj_Singh_Resume.pdf: the original downloadable resume.
- .nojekyll: lets GitHub Pages serve the static files directly.

The export preserves the published design and content. CSS has been separated into its own file for easier editing, and resume links use relative paths so they work on other hosts too.

## View and edit on your computer

1. Extract the ZIP (do not edit inside the ZIP).
2. Open the extracted folder in VS Code.
3. Double-click index.html to preview it in your browser.
4. Edit index.html, save, and refresh the browser.
5. Edit styles.css to change the appearance.

If you have Python installed, you can also run this inside the folder:

```sh
python -m http.server 8000
```

Then open http://localhost:8000. On Windows, use `py` instead of `python` if needed. Press Ctrl+C to stop.

## Common edits

- Name and introduction: search index.html for `I'm Satyendra`.
- Projects: search for `<section id="projects">`. Each `<article class="project">` is one project.
- Education and experience: find `<section id="resume">`.
- Skills: find `<section id="skills">`.
- Contact links: find `id="contact"`.
- Colors: edit the CSS custom properties such as --green and --bg in styles.css. Later rules override earlier rules.
- Resume: replace the PDF using exactly the same filename, or update both resume links in index.html.

The project detail panels use native HTML <details> elements; no JavaScript is required.

## Update the existing public site

Ask in this ChatGPT conversation for the changes you want. You can attach edited files or a replacement resume and request that they be deployed to the existing site.

Editing the downloaded files on your computer does NOT automatically update the current live site. The live site must be redeployed. This export is not connected to a GitHub repository and has no automatic synchronization with the current host.

## Optional: host a copy from your own GitHub repository

1. Sign in to your own GitHub account and create a new public repository named `portfolio`.
2. Upload the CONTENTS of this folder, not the ZIP or an extra enclosing folder. index.html must be at the repository root. Commit the files to main.
3. Open repository Settings > Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select main and /(root), then Save.
6. Wait for publication and use the live URL shown in Pages settings.

For future changes, edit files in that repository and commit to main. GitHub Pages republishes changes from the configured source. Your GitHub-hosted copy and the existing ChatGPT-hosted website are separate deployments.

Official setup reference:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Before sharing updates

Check your resume download, contact links, project details, and the layout on both a phone and desktop. Keep a backup or use Git history to track your edits.
