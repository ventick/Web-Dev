# Online Store Lab

Angular project for Lab 4. The app shows a responsive catalog of real Kaspi product pages with reusable product cards, ratings, image galleries, and share buttons for WhatsApp and Telegram.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Build

```bash
npm run build
```

## What is implemented

- Angular standalone components with routing
- TypeScript `Product` interface
- `@for` control flow for rendering the catalog
- Reusable `ProductCardComponent`
- Responsive product grid
- Real links to Kaspi product pages
- Share actions that safely encode Kaspi URLs with `encodeURIComponent`
