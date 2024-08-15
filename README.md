# Mechanikoi Landing Page

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


====

HOW TO MAKE CHANGES AND BUILD THE SITE

1) mechanikoi-landing-page -> Abrir solución con Visual Studio
2) Hacer las modificaciones que hagan falta, para el texto es desde src/pages/index.astro. Las imágenes están en src/assets
3) Pushear cambios en Git

3) Para buildear: Shift Click derecho en mechanikoi-landing-page. Abrir con terminal, usar comando npm run build.
4) Crear un zip que contenga los archivos dentro de la carpeta dist, llamarlo dist.zip.
5) Entrar a CPANEL, File Manager
6) Dentro de public_html, reemplazar dist.zip con la nueva versión, borrar los otros archivos salvo cgi-bin. 
7) Descomprimir dist.zip dentro de public/html

Listo! :> gracias tomi
