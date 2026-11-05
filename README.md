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

## Recommended hosting (free or nearly free)
- **Netlify** or **Cloudflare Pages**: drag-and-drop this folder at app.netlify.com/drop (or pages.cloudflare.com), then add the custom domain `floradelaney.com` and follow their DNS steps.
- Any other web host also works: upload everything to the site's root (`public_html`).

**Before you cancel HubSpot:** point the domain's DNS at the new host first, confirm the site loads, *then* cancel.

## Things you can change
- **Booking link**: in every page, search for `calendar.app.google/gooH22BkNFqcAdAE8` (the button) and `appointments/schedules/…` (the embedded calendar on the Contact page).
- **Message form**: it opens a pre-filled email to flora@floradelaney.com in the visitor's own email app. If you'd rather have messages arrive without the visitor's email app, a free service such as Formspree can take its place (it's a one-line change to the form in `contact/index.html`).
- **Social**: LinkedIn only (footer). X and Facebook were removed.
- **Colors & fonts**: top of `assets/css/style.css` (coral #fd5a4c / #ff725e, sky #e5f4f7, teal #71c0d4, footer #56a4bf; Inter + Albert Sans).

## One item to handle before HubSpot ends
The blog post "The Merchandising Strategy versus Capacity Challenge…" embeds a **HubSpot-hosted video**. Download it from HubSpot (Files → Videos) and upload it to YouTube or Vimeo, then replace the `play.hubspotvideo.com` link in `blog/the-merchandising-strategy-versus-capacity-challenge-in-retailers-today/index.html` with the new embed link.

## Preview locally
Double-click `index.html`. Links work locally; the Google Calendar embed and fonts need an internet connection.
