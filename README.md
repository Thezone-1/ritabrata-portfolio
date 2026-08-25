# rbganguly.in

Personal site for Ritabrata Ganguly, performance and reliability engineer.

Static HTML. No build step, no dependencies.

## Files

- `index.html` is the whole home page, styles and script inline.
- `blog/index.html` is the /blog route.
- `Main.dc.html` is the design source the page was generated from.
- `portrait.webp` is used on the page, `portrait.jpg` is only for social previews.

## Local

```
python -m http.server 8000
```

## Deploy

```
npx vercel deploy --prod
```

## DNS

rbganguly.in and www.rbganguly.in are attached to the Vercel project. At the registrar set:

```
A     rbganguly.in       76.76.21.21
CNAME www                cname.vercel-dns.com
```

Or point the nameservers at ns1.vercel-dns.com and ns2.vercel-dns.com.

## Open items

- `resume.pdf` is referenced by the Connect card but does not exist yet.
- Two `[RITABRATA: ...]` placeholders, one in the QA Engineer card and one on /blog.
