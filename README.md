# Yellow Yards Interiors

A production-grade luxury interior design website with a built-in headless CMS, cloud content sync, and contact form email delivery. Built for **Yellow Yards Interiors**, Hyderabad.

**Live:** [yyinteriors.studio](https://yyinteriors.studio) · [www.yyinteriors.studio](https://www.yyinteriors.studio)

---

## Overview

This is a fully static React application deployed on Vercel with:

- A pixel-perfect marketing website targeting homeowners in Hyderabad
- A password-protected admin CMS at `/secret` for editing all site content
- Real-time cloud sync via JSONBin.io so admin changes reflect to all visitors instantly
- Contact form email delivery via Web3Forms
- Zero database — content is stored as JSON in JSONBin and cached in the browser

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6.3.5 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion v12) |
| Routing | React Router v7 |
| Content storage | JSONBin.io (cloud JSON store) |
| Email delivery | Web3Forms |
| Deployment | Vercel |
| Fonts | Cormorant Garamond (headings), Inter (body) |

---

## Project Structure

```
yy-interiors/
├── api/
│   ├── get-content.js          # Vercel serverless — reads from JSONBin (master key server-side)
│   └── update-content.js       # Vercel serverless — writes to JSONBin (master key server-side)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ArchitectureSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── DesignPhilosophy.tsx
│   │   │   ├── MaterialsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Preloader.tsx
│   │   │   ├── ArchitecturalCursor.tsx
│   │   │   └── ScrollProgressPanel.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── AdminPanel.tsx      # Secret CMS (login-protected)
│   │   │   ├── ProjectDetail.tsx
│   │   │   └── ProjectsCollection.tsx
│   │   └── App.tsx
│   ├── context/
│   │   └── ContentContext.tsx      # Global content state + cloud sync logic
│   └── data/
│       └── defaultContent.ts       # Full SiteContent interface + default values
├── .env                            # Local dev env vars (gitignored)
├── vercel.json                     # Vercel deployment config
└── package.json
```

---

## Page Sections

The homepage renders the following sections in order:

1. **Hero** — Full-screen parallax with headline, subheading, CTA buttons, and trust line
2. **Brand Story** — About section with stats and image
3. **CTA Banner** — Repeated conversion banner (dark/light variants)
4. **Projects** — Masonry photo grid of completed projects
5. **Feature Section** — "Beautiful Designs Are Easy..." editorial layout with floor plan graphic
6. **Services** — 8-card services grid with images
7. **Why Choose Us** — 6 differentiator pillars with editorial photography
8. **Materials** — Material and finish showcase grid
9. **Testimonials** — 3 client testimonials
10. **Process** — 5-step design process
11. **Contact** — Contact form with Web3Forms email delivery

---

## Admin CMS

### Accessing the CMS

Navigate to `/secret` on the live domain or localhost.

**Credentials:**
```
Username: yyinteriors
Password: yy@#$123
```

> Session is stored in `sessionStorage` — logging out clears the session. Credentials are hardcoded in `AdminPanel.tsx`.

### What Can Be Edited

Every section of the site is editable from the CMS:

| Tab | Editable Fields |
|---|---|
| Hero | Eyebrow, heading, subheading, CTA buttons, background image, trust line items |
| Navigation | Brand name, tagline |
| Brand Story | Eyebrow, heading, 3 paragraphs, stats, image |
| Projects | All project cards (title, location, style, image) |
| Feature Section | Eyebrow, heading, body, stats, floating card |
| Services | All 8 service cards (title, description, image) |
| Why Choose Us | Eyebrow, heading, all 6 pillars |
| Materials | All material cards (name, description, image) |
| Testimonials | All 3 testimonial quotes, client names, project labels |
| Process | All 5 steps (number, title, description) |
| CTA Sections | Eyebrow, heading, body, both button labels |
| Contact | Eyebrow, heading, subheading, phone, email, address, Web3Forms key |
| Footer | Brand name, tagline, copyright |
| Connection | Cloud sync status and configuration info |

> **Developer credit** ("Developed by AR Tech Studio") is hardcoded in `Footer.tsx` and cannot be changed via the CMS.

### How Saves Work

1. Admin edits content and clicks **SAVE CHANGES**
2. Change is written to `localStorage` immediately (instant UI update)
3. Change is pushed to JSONBin via the `/api/update-content` Vercel serverless function
4. All visitors fetching fresh content will receive the updated version within 10 minutes

---

## Content Sync Architecture

```
Visitor page load
  └─ Is localStorage cache < 10 minutes old?
       ├─ YES → serve from localStorage (0 API requests used)
       └─ NO  → GET /api/get-content → Vercel function → JSONBin → store in localStorage

Admin saves
  └─ POST /api/update-content → Vercel function → JSONBin → stamp cache timestamp
```

### Why this approach

- **No database** — JSONBin stores the entire site content as a single JSON object
- **Master key is server-side only** — never exposed in the browser bundle
- **10-minute cache** — cuts JSONBin API usage by ~80–90%, keeping well within free tier limits
- **localStorage fallback** — if the network fails, visitors still see the last known content

### JSONBin Free Tier Limits

The free plan provides 10,000 requests/month. With 10-minute caching:

- A returning visitor within 10 minutes = 0 requests
- 300 unique visitors/day ≈ 300–600 requests/day ≈ 9,000–18,000/month

Upgrade to JSONBin paid plan if traffic consistently exceeds ~150 unique visitors/day.

---

## Environment Variables

### Vercel Dashboard

Set these in **Vercel → Project → Settings → Environment Variables** for all environments:

| Variable | Exposed to browser | Description |
|---|---|---|
| `VITE_JSONBIN_BIN_ID` | Yes (safe) | Your JSONBin Bin ID — used by frontend to identify the content store |
| `JSONBIN_MASTER_KEY` | No (server-only) | Your JSONBin Master Key — used only by Vercel API functions, never reaches the browser |

### Local Development

Create a `.env` file in the project root (already in `.gitignore`):

```env
VITE_JSONBIN_BIN_ID=your_bin_id_here
```

> `JSONBIN_MASTER_KEY` is server-side only. For local development with working read/write API routes, use `vercel dev` instead of `npm run dev`. With plain `npm run dev`, content reads from `localStorage` or `defaultContent` and cloud writes will fail gracefully without crashing the app.

---

## Contact Form Setup

The contact form submits to **Web3Forms** which delivers enquiries to a configured email inbox.

### Steps

1. Go to [web3forms.com](https://web3forms.com)
2. Enter the destination email address
3. Copy the **Access Key** they send you
4. Go to `yyinteriors.studio/secret` → **Contact** tab → paste the key → **SAVE CHANGES**

The key is stored in JSONBin alongside all other content — no code changes needed.

### Fields Submitted

- Name, Email, Phone Number, Message
- Subject: `New Consultation Request — Yellow Yards Interiors`
- Sender name: `Yellow Yards Interiors Website`

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (no API routes)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

For local development with working API routes (content read/write from JSONBin):

```bash
# Install Vercel CLI globally
npm i -g vercel

# Run with serverless functions enabled
vercel dev
```

---

## Deployment

The project deploys automatically to Vercel on every push to the `main` branch.

### First-time Vercel Setup

1. Connect the GitHub repository to Vercel
2. Framework preset: **Vite** (auto-detected)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add the two environment variables listed above
6. Click **Deploy**

The `vercel.json` handles SPA routing — all paths serve `index.html` and Vercel API functions take routing priority automatically.

---

## Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Ivory | `#F5F1EA` | Page background, light section backgrounds |
| Charcoal | `#1B1B1B` | Primary text, dark section backgrounds |
| Bronze | `#8C6A4A` | Accents, CTAs, highlights, borders |
| Sand | `#D8CBB8` | Muted text, secondary labels, dividers |

### Typography

| Font | Usage |
|---|---|
| Cormorant Garamond | All headings, display text, large numbers, section titles |
| Inter | Body copy, labels, buttons, captions, UI elements |

### Animation Easing

All animations use the Motion library (`motion/react`):

- **Decelerate** (elements entering): `[0.22, 1, 0.36, 1]`
- **Accelerate out** (elements leaving): `[0.76, 0, 0.24, 1]`

---

## Security Notes

- **Admin password** is hardcoded in `AdminPanel.tsx` as `ADMIN_PASS`. Change this value for enhanced security.
- **Master Key** is stored only in the Vercel server environment — never in the JS bundle, localStorage, or any client-accessible location.
- **Bin ID** is embedded in the frontend bundle via `VITE_JSONBIN_BIN_ID` — this is intentional and safe. It identifies the data store but does not authenticate write access.
- **Session** uses `sessionStorage` — automatically cleared when the browser tab closes. No persistent login tokens.
- **Content only** — no financial data, user accounts, passwords, or sensitive personal information is stored anywhere in the system. Worst-case scenario if credentials are compromised: visible site content (text/images) can be changed and reverted via Reset Defaults.

---

## Developer Credit

Built and maintained by **AR Tech Studio**.

This credit is hardcoded in `src/app/components/Footer.tsx` and is intentionally not editable via the CMS panel.
