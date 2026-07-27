# NorthPeak Digital — one-page agency site

A hand-built, responsive one-page site for the fictional agency NorthPeak Digital.
Vanilla HTML/CSS/JS — no frameworks, no page builders.

- **Live URL:** https://northpeakk-digital.netlify.app/
- **GitHub repo:** https://github.com/pritt18/northpeak-digital

## Structure

```
northpeak-digital/
├── index.html        Page markup (hero, services, results, pricing, contact, footer)
├── css/
│   └── style.css      All styles, including responsive breakpoints
├── js/
│   └── script.js       Mobile nav toggle + client-side form validation
└── README.md
```

## Run it locally in VS Code

1. Open the `northpeak-digital` folder in VS Code (`File > Open Folder...`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel, if you don't have it.
3. Right-click `index.html` in the file explorer and choose **Open with Live Server**.
4. The site opens at `http://127.0.0.1:5500` and reloads automatically as you edit.

(No build step, no `npm install` — it's plain HTML/CSS/JS.)

## Push to GitHub

```bash
cd northpeak-digital
git init
git add .
git commit -m "Initial commit: NorthPeak Digital site"
git branch -M main
git remote add origin https://github.com/pritt18/northpeak-digital.git
git push -u origin main
```

If the repo already has a commit (e.g. a README created on GitHub), pull first to avoid a rejected push:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Deploy

Already deployed to Netlify at https://northpeakk-digital.netlify.app/
