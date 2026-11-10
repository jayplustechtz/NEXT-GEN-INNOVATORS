# NEXT GEN INNOVATORS Website

Official company website for **NEXT GEN INNOVATORS** — *Turning Impossible into Possible.*

This is a standalone React + TypeScript + Vite frontend built from the supplied company identity and brand guide. It does not use AfyaFlow branding, content, or project references.

## Stack

- Vite 8
- React 19
- TypeScript
- Oxlint

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Project structure

```text
public/
  assets/
    next-gen-innovators-logo.jpg   # logo extracted from brand guide PDF
src/
  components/
    Header.tsx                     # sticky navigation with mobile menu
    Hero.tsx                       # hero, tagline, CTAs, brand visual
    About.tsx                      # company identity and purpose
    WhatWeDo.tsx                   # Problem → Idea → Technology → Solution → Impact
    VisionMission.tsx              # official vision and mission
    InnovationProcess.tsx          # Observe → Identify → Validate → Build → Test → Improve → Scale
    Values.tsx                     # 6 brand personality values
    Projects.tsx                   # expandable placeholder project cards
    Contact.tsx                    # contact placeholders + front-end form
    Footer.tsx                     # footer navigation and brand summary
  data.ts                          # brand constants (name, tagline, vision, mission)
  App.tsx                          # page composition and skip link
  index.css                        # brand theme and responsive layout
  main.tsx                         # React entry
```

## Brand/content notes

- Company identity, vision, mission, tagline, values, and process follow the supplied `NEXT_GEN_INNOVATORS_Company_Identity_Brand_Guide.pdf`.
- The logo is preserved as the extracted asset and displayed without distortion.
- Projects and contact details are clearly identified placeholders; no completed projects, clients, partnerships, achievements, emails, phone numbers, or addresses are invented.
- The contact form is a front-end placeholder; connect it to an email or backend service before collecting live submissions.
