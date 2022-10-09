# XPRT - Home Services

This project is a simple website for a handyman service company located in Dominican Republic.

## Development Guide

1. **Clone Repo** `git clone https://github.com/tidalsites/xprthome.git`
2. **Install Packages** `npm i`
3. **Start app** `npm run dev`

## Deploy - Staging

After pushing changes to main branch, Github Actions will trigger a deployment to S3.

1. `git add .`
2. `git commit -m <commit_message>`
3. `git push`

## Deploy - Production

AWS Amplify CI pipeline will be triggered when a new tag is pushed to repository.

1. `git tag -a <tag_number> -m <tag_message>`
2. `git push origin <tag_number>`

## Tech stack

- **FrontEnd Framework:** React w/ Typescript
- **CSS:** Sass with BEM
- **Build Tool:** Vite
- **CI/CD Pipeline (staging):** Github Actions
- **CI/CD Pipeline (production):** AWS Amplify
- **Staging Environment:** AWS S3 static hosting
- **Deployment Environment:** AWS Amplify

## Color Palette

- **Primary:** <div style="display: flex; align-items: center; gap: 1rem"><span  style="width: 1rem; height: 1rem; background-color: #b4a02b"></span><span>#b4a02b</span></div>
- **Black:** <div style="display: flex; align-items: center; gap: 1rem"><span  style="width: 1rem; height: 1rem; background-color: #333"></span><span>#333</span></div>
- **White:** <div style="display: flex; align-items: center; gap: 1rem"><span  style="width: 1rem; height: 1rem; background-color: #efefef"></span><span>#efefef</span></div>
- **Gray:** <div style="display: flex; align-items: center; gap: 1rem"><span  style="width: 1rem; height: 1rem; background-color: #a9a9a9"></span><span>#a9a9a9</span></div>
- **Red:** <div style="display: flex; align-items: center; gap: 1rem"><span  style="width: 1rem; height: 1rem; background-color: #da3721"></span><span>#da3721</span></div>
