# React + Vite

This template provides a minimal setup to get React working in Vite with HMR, plus formatting and linting via Biome.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Linting and formatting

[Biome](https://biomejs.dev) handles formatting, import organization, and linting
for this project — see `biome.json`. Run `pnpm check` to format and fix in place,
or `pnpm lint` to report without writing.
