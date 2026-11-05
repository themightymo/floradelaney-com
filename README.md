# floradelaney.com — static website (rebuilt from HubSpot, Oct 2026)

Plain HTML/CSS/JS. No HubSpot, no database, no build step. Upload this whole folder to any host.

## What's inside
| Page | File |
|---|---|
| Home | `index.html` |
| About | `about/index.html` |
| Services (+ 2 case-study PDFs) | `services/index.html`, `assets/docs/` |
| Books & Speaking | `books-speaking/index.html` |
| Let's Connect (Google Calendar + message form) | `contact/index.html` |
| Blog (8 posts) | `blog/…` |
| Disclaimer / Privacy / Accessibility | their own folders |
| 404 page, sitemap.xml, robots.txt | root |

URLs match the old site (`/about`, `/services`, `/books-speaking`, `/blog/<post>`, `/contact`), so existing links and Google results keep working.

## Hosting: GitHub Pages
Hosted from the `main` branch of https://github.com/themightymo/floradelaney-com (repo root). The `CNAME` file sets the custom domain `floradelaney.com`; pushing to `main` redeploys automatically.

DNS for floradelaney.com (at the domain registrar):
- `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `AAAA` records for `@` (optional): 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
- `CNAME` record for `www`: themightymo.github.io

Once DNS resolves, tick **Enforce HTTPS** in the repo's Settings → Pages.

**Before you cancel HubSpot:** point the domain's DNS at GitHub Pages first, confirm the site loads, *then* cancel.

## Things you can change
- **Booking link**: in every page, search for `calendar.app.google/gooH22BkNFqcAdAE8` (the button) and `appointments/schedules/…` (the embedded calendar on the Contact page).
- **Message form**: it opens a pre-filled email to flora@floradelaney.com in the visitor's own email app. If you'd rather have messages arrive without the visitor's email app, a free service such as Formspree can take its place (it's a one-line change to the form in `contact/index.html`).
- **Social**: LinkedIn only (footer). X and Facebook were removed.
- **Colors & fonts**: top of `assets/css/style.css` (coral #fd5a4c / #ff725e, sky #e5f4f7, teal #71c0d4, footer #56a4bf; Inter + Albert Sans).

## Video
The interview video in the blog post "The Merchandising Strategy versus Capacity Challenge…" used to be HubSpot-hosted; it is now self-hosted at `assets/video/flora-delaney-localization-interview.mp4`.

## Preview locally
Double-click `index.html`. Links work locally; the Google Calendar embed and fonts need an internet connection.
