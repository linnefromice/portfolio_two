# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website themed as a retro video game console. Users navigate using an on-screen D-pad controller instead of traditional menus. Built with React 19 + TypeScript + Vite, managed with pnpm.

## Commands

- `pnpm dev` — Start dev server with hot reload
- `pnpm build` — Production build (runs `tsc -b && vite build`)
- `pnpm compile` — Type-check only (`tsc -b`)
- `pnpm lint` — ESLint (`eslint .`)
- `pnpm preview` — Preview production build locally

No test framework is configured.

## Architecture

### Navigation Model

The app uses a 2D grid navigation controlled by a D-pad:
- **Left/Right** switches between 3 main menus: Account (0), Work (1), Side (2)
- **Up/Down** navigates submenu items within Account and Side menus
- State is managed in `App.tsx` via `activeMenuIndex` and `activeSubMenuIndex`

### Component Structure

- `App.tsx` — Root component; owns all navigation state and D-pad handler functions
- `src/ui/Menus.tsx` — Renders the 3 main menu icons and delegates to submenu/content
- `src/ui/Buttons/DPad.tsx` — D-pad controller with boundary-aware disabled states
- `src/ui/Account/Account.tsx` — Account submenu (Profile, Skill, Career, Hobby)
- `src/ui/Side/Side.tsx` — Side projects submenu (4 projects defined in `constants.tsx`)
- `src/ui/Content/Content.tsx` — Content router; renders the appropriate page based on menu indices
- `src/ui/Content/Work/Work.tsx` — Animated gallery using Vite `import.meta.glob()` for dynamic image loading with particle effects

### Key Patterns

- No routing library; navigation is index-based via React state
- Work images are loaded dynamically via `import.meta.glob('/src/assets/work/*.png')` and `import.meta.glob('/src/assets/work/secret/*.png')`
- Uses `react-icons` (Material Design and Font Awesome) for icons
- CSS is per-component (no CSS modules or styled-components)
- Responsive breakpoints at 480px, 768px, and 1024px
