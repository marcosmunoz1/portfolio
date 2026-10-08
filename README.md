# Portafolio — Desarrollador Full-Stack

Portafolio personal hecho con **Vue 3 + Vite**, listo para desplegar en **Vercel**.

## 1. Personalizar

Todo el contenido está en un solo archivo: **`src/data/profile.js`**

- `profile` → nombre, rol, descripción, email, ubicación, redes, CV.
- `skillGroups` → tus habilidades agrupadas por categoría (cada una es un chip).
- `projects` → tus proyectos (título, descripción, tecnologías, link a demo y repo).

Imágenes de proyectos y CV: ponelos en la carpeta `public/`
(ej. `public/proyectos/tienda.png` → `image: '/proyectos/tienda.png'`,
`public/cv.pdf` → `cvUrl: '/cv.pdf'`).

## 2. Correr en local

Necesitás Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## 3. Subir a Vercel

**Opción A — desde GitHub (recomendada)**

1. Creá un repositorio en GitHub y subí el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Mi portafolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portfolio.git
   git push -u origin main
   ```
2. Entrá a https://vercel.com → **Add New… → Project** → importá el repo.
3. Vercel detecta Vite solo (Build: `npm run build`, Output: `dist`). Tocá **Deploy**.

Cada `git push` vuelve a desplegar automáticamente.

**Opción B — con la CLI**

```bash
npm i -g vercel
vercel        # preview
vercel --prod # producción
```

## Estructura

```
src/
├── data/profile.js        ← tus datos
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   ├── ProjectsSection.vue
│   ├── ContactSection.vue
│   └── SiteFooter.vue
├── App.vue
├── main.js
└── style.css              ← colores y tipografías (variables en :root)
```

Para cambiar el color de acento, editá `--accent` en `src/style.css`.
