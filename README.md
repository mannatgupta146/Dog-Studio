# Dog Studio Clone

A React + Vite recreation of the Dogstudio website: https://dogstudio.co/

This project focuses on the visual experience, scroll-driven motion, and layered art direction from the original site. It uses Three.js for the 3D dog scene, GSAP for scroll animation, and custom CSS for the full-page layout, hover states, and footer treatment.

## What Is Used

- React 19
- Vite
- Three.js
- @react-three/fiber
- @react-three/drei
- GSAP
- @gsap/react
- ScrollTrigger
- Custom CSS

## Project Structure

- `src/App.jsx` - Main page layout and sections
- `src/App.css` - Visual styling, section layout, footer, and hover states
- `src/components/Dog.jsx` - 3D dog scene, materials, hover transitions, and scroll animation
- `public/model/dog.drc.glb` - Main 3D model
- `public/matcap/` - Matcap textures used for the dog and branch shading
- `public/images/` - Project preview images shown on hover
- `public/fonts/` - Display and body fonts used by the page

## Features

- Full-screen landing section with a fixed Three.js canvas
- Scroll-driven dog motion using GSAP + ScrollTrigger
- Hover-driven project preview images
- Matcap-based shader transitions for the dog material
- Footer area inspired by the Dogstudio design language
- Section-based page structure with layered backgrounds

## How It Works

- `App.jsx` builds the long-scroll landing page and the project sections.
- `Dog.jsx` loads the GLB model, assigns materials, and drives the motion/shader transitions.
- `App.css` controls the visual style, footer layout, hover states, and section spacing.
- Project thumbnails in the second section control the preview images through CSS hover selectors.
- ScrollTrigger connects the 3D dog movement to the page scroll range.

## Design Highlights

- Dark cinematic background with soft gradients and layered overlays
- Large serif typography for the hero and section headlines
- Thin separator lines and footer details to match the original Dogstudio feel
- Project preview images that appear on hover
- 3D scene integrated into the page instead of sitting in a separate canvas-only view

## Assets Used

- `dog.drc.glb` as the main model
- Matcap textures for stylized shading transitions
- Branch textures for the organic background elements
- Font files for the display and body type styles
- Gallery images for the featured-project hover states

## Scope

This project is a visual clone, not a full production replica of the original Dogstudio site. It recreates the main interaction patterns, composition, and mood for learning and portfolio practice.

## Running Locally

```bash
npm install
npm run dev
```

## How To Use

- Open the project in your editor.
- Run `npm install` once to install dependencies.
- Start the app with `npm run dev`.
- Open the local Vite URL in your browser.
- Hover the project titles to see the preview images and scroll through the page to view the 3D dog animation.

## How To Contribute

- Fork the repository or create a new branch for your changes.
- Keep edits focused on one feature or fix at a time.
- Follow the existing React, CSS, and GSAP structure already used in the project.
- Test your changes with `npm run build` and `npm run lint` before sharing them.
- If you add new assets, place them in the matching `public/` folder and reference them clearly in the code.

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint across the project

## Notes

This is a front-end clone project built for learning and practice. The design and interaction references are based on the original Dogstudio site, while the implementation and assets are organized for this local React project.
