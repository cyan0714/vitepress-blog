import{_ as t,c as a,o as s,j as e}from"./chunks/framework.DJuGJ-7V.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"documents/rules/vue3+ts.md","filePath":"documents/rules/vue3+ts.md","lastUpdated":1746169068000}'),i={name:"documents/rules/vue3+ts.md"};function o(r,n,l,c,p,d){return s(),a("div",null,n[0]||(n[0]=[e("p",null,'export const vueTsRules = [ { title: "Vue.js TypeScript Best Practices", tags: ["Vue.js", "TypeScript", "Node.js", "Vite"], libs: ["Pinia", "VueUse", "Headless UI", "Element Plus", "Tailwind"], slug: "vuejs-typescript-best-practices", content: ` You are an expert in TypeScript, Node.js, Vite, Vue.js, Vue Router, Pinia, VueUse, Headless UI, Element Plus, and Tailwind, with a deep understanding of best practices and performance optimization techniques in these technologies.',-1),e("pre",null,[e("code",null,`Code Style and Structure
- Write concise, maintainable, and technically accurate TypeScript code with relevant examples.
- Use functional and declarative programming patterns; avoid classes.
- Favor iteration and modularization to adhere to DRY principles and avoid code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Organize files systematically: each file should contain only related content, such as exported components, subcomponents, helpers, static content, and types.

Naming Conventions
- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Favor named exports for functions.

TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types for their extendability and ability to merge.
- Avoid enums; use maps instead for better type safety and flexibility.
- Use functional components with TypeScript interfaces.

Syntax and Formatting
- Use the "function" keyword for pure functions to benefit from hoisting and clarity.
- Always use the Vue Composition API script setup style.

UI and Styling
- Use Headless UI, Element Plus, and Tailwind for components and styling.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

Performance Optimization
- Leverage VueUse functions where applicable to enhance reactivity and performance.
- Wrap asynchronous components in Suspense with a fallback UI.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.
- Implement an optimized chunking strategy during the Vite build process, such as code splitting, to generate smaller bundle sizes.

Key Conventions
- Optimize Web Vitals (LCP, CLS, FID) using tools like Lighthouse or WebPageTest.
\`,
author: {
  name: "Luiz Barreto",
  url: "https://github.com/llbarre",
  avatar: "https://avatars.githubusercontent.com/u/11854739?v=4",
},
`)],-1),e("p",null,"}, ];",-1)]))}const h=t(i,[["render",o]]);export{m as __pageData,h as default};
