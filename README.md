# M. Ayan Naseer · Portfolio

Source for [ayan.is-a.dev](https://ayan.is-a.dev), the portfolio of M. Ayan Naseer, a full stack developer working remotely with US and UK teams.

Built with Next.js 14 (App Router) and Tailwind CSS, deployed on Netlify. The homepage is fully static.

## Editing content

All content lives in `utils/data/`:

| File | What it holds |
| --- | --- |
| `personal-data.js` | Name, headline, contact details, availability, profile links |
| `services.js` | Services list |
| `projects-data.js` | Case studies (with their diagrams) and open source projects |
| `experience.js` | Work history |
| `skills.js` | Grouped skills |
| `educations.js` | Education |
| `faq.js` | FAQ section (also used for FAQ structured data) |
| `tools.js` | Tools list and each tool page's title and description |

Change a file, commit, and Netlify redeploys. Generated from the same data at build time:

- `app/opengraph-image.js`: the link preview image
- `utils/structured-data.js`: schema.org JSON-LD on the homepage (Person, ProfilePage, ProfessionalService, FAQPage)
- `app/llms.txt/route.js`: a plain-text profile at `/llms.txt` for AI assistants

## Running locally

```bash
npm install
npm run dev
```

Optional environment variables, in `.env.local`:

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Contact form delivery |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` | Captcha on the contact form (shown only when both are set) |
| `NEXT_PUBLIC_GTM` | Google Tag Manager |

## After deploying

Run `npm run indexnow` once the new version is live. It tells Bing (which also feeds ChatGPT search and Copilot) to recrawl every page in the sitemap. For Google, use URL Inspection → Request indexing in Search Console.

## Also here

`/tools` has a set of small browser utilities: formatters, converters and generators.
