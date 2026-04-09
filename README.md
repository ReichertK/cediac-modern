# CEDIAC Group — Sitio Web Institucional

Sitio web del grupo CEDIAC, centro de diagnóstico por imágenes de alta complejidad y kinesiología con sedes en Berazategui y Quilmes, Zona Sur del Gran Buenos Aires.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Embla Carousel
- React Router DOM

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor se levanta en `http://localhost:5173/cediac-modern/`.

## Build de producción

```bash
npm run build
npm run preview
```

Los archivos estáticos se generan en la carpeta `dist/`.

## Deploy

El proyecto incluye un workflow de GitHub Actions que publica automáticamente en GitHub Pages al pushear a `main`.

También se incluyen archivos de configuración para:

- **Netlify / Cloudflare Pages:** `public/_redirects`
- **Vercel:** `vercel.json`

## Estructura del proyecto

```
src/
  components/   → Layout, Navbar, Footer
  pages/        → Home, Servicios, Equipos, Sucursales,
                  Kinesiologia, Contacto, Nosotros, Faq
  assets/       → Recursos estáticos
public/
  images/       → Fotografías e imágenes del sitio
```
