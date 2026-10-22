# Satyendra Raj Singh — Personal Portfolio

A light blue portfolio inspired by the reference layout you shared. Includes a code-card introduction, profile photo area, education, experience, project gallery with detail dialogs, light/dark mode, accent colors, a resume download, and contact links.

No installation, paid services, API keys, or build tools are needed. Open `index.html` in your browser to preview.

## 1. Replace your photo later

1. Choose a portrait photo and save it as `profile.jpg`. Use a real JPG image, preferably at least 640 pixels wide. Simply renaming a PNG to JPG does not convert the image.
2. Put it inside the `assets` folder.
3. Open `index.html` and find this line (search for `YOUR PHOTO`):

```html
<img class="profile-photo" src="assets/profile-placeholder.svg" alt="Placeholder for Satyendra's personal photo" width="640" height="760">
```

4. Change it to:

```html
<img class="profile-photo" src="assets/profile.jpg" alt="Satyendra Raj Singh" width="640" height="760">
```

5. Upload both `index.html` and `assets/profile.jpg` to the same locations in GitHub and commit. Your photo will appear after deployment.

For a PNG photo, use `profile.png` in both the actual filename and the HTML. Use the exact capitalization. To adjust the crop, edit `object-position:center 25%` in the `.profile-photo` CSS rule.

## 2. Replace your existing GitHub Pages site

1. Extract the ZIP. Do not upload the ZIP itself.
2. Open the GitHub repository that currently publishes your website.
3. Open its publishing folder. Usually this is the repository root, where the old `index.html` is located. If Settings > Pages uses `/docs`, use that folder.
4. Choose **Add file > Upload files**.
5. Drag in **index.html, styles.css, script.js, the entire assets folder, and Satyendra_Raj_Singh_Resume.pdf**. Keep the directory structure below. You may also upload README.md and .nojekyll. If .nojekyll is hidden on your computer, GitHub's Add file > Create new file can create a file with that name and a blank line.
6. Commit to the branch that Pages publishes (usually `main`). If you make a pull request instead, merge it into that publishing branch.
7. Keep any existing **CNAME** file and custom-domain settings. You do not need to change domain DNS for this design update.
8. Check **Settings > Pages**. For this plain HTML site at the repository root, use **Deploy from a branch**, select **main** and **/(root)**, and Save. Keep a different configured branch/folder if that is where you uploaded your files.
9. Open **Actions** and wait for the Pages deployment to succeed. Publication can take up to 10 minutes.
10. Visit the URL shown under Settings > Pages. Hard refresh or use a private window if your browser shows the old design.

Required files at the publishing root:

- `index.html`
- `styles.css`
- `script.js`
- `Satyendra_Raj_Singh_Resume.pdf`
- `assets/` with all six SVG files, plus your photo when you add one
- `.nojekyll` (recommended)
- `CNAME` (keep yours if you already use a custom domain)

## 3. Make future changes

| Change | Where to edit |
| --- | --- |
| Name, biography, education, experience, projects, contact details | index.html |
| Detailed project descriptions | The matching `<template id="detail-...">` near the bottom of index.html |
| Colors, spacing, font sizes, photo crop | styles.css |
| Rotating role text | `roles` in script.js |
| Your resume | Replace Satyendra_Raj_Singh_Resume.pdf with the same filename |
| Project illustrations | Replace the matching SVG in assets, or update the img src to your screenshot |

In GitHub, open a file, click the pencil icon, edit, and commit. A commit to the publishing branch triggers another deployment. For CSS or JavaScript changes, increase `?v=4` in index.html to `?v=5`, then to 6 next time, to help prevent stale browser caches.

## 4. How the contact form works

The button opens the visitor's email application with an addressed draft. It does **not** automatically send messages or store them on a server. The visitor reviews and sends the draft. The direct email link is also available. This works with static GitHub Pages hosting without a third-party form service.

## Notes

- All project illustrations are editable SVG concepts, not screenshots of the original applications.
- GitHub links go to your profile; specific project repository links were not provided.
- Themes and accent colors are saved only in the visitor's own browser.
- No analytics, external font dependencies, or ChatGPT branding are included.
