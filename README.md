# rbganguly.in

Personal site for Ritabrata Ganguly, performance and reliability engineer.

Next.js 15 (App Router), React 19, TypeScript, Tailwind 3.

## Run

```
npm install
npm run dev
```

## Structure

- `lib/content.ts` is the single source for every piece of copy. Edit here, not in components.
- `app/page.tsx` composes the bento grid.
- `app/blog/page.tsx` is the /blog route.
- `app/components/` holds Splash, ThemeToggle, Reveal, Metrics, Toolkit and the SVG art.
- `app/globals.css` carries the design tokens and component classes.
- `Main.dc.html` is the original design source, kept for reference.

## Theming

Light and dark are CSS custom properties in `globals.css`, switched by `next-themes` on a
`data-theme` attribute. Add a colour by adding a token to both blocks, never a raw hex.

## Deploy

Pushes to `master` deploy automatically once the Vercel Git integration is connected.
Manual deploy: `npx vercel deploy --prod`.

Domain `rbganguly.in` is on Vercel nameservers.

## Open items

- Nothing outstanding on links; Connect points at LinkedIn, X and email.
- Two `[RITABRATA: ...]` placeholders, in `lib/content.ts` and `app/blog/page.tsx`.
