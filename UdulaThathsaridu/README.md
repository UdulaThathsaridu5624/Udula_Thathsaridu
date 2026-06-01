# Udula Thathsaridu — Portfolio

Personal portfolio website built with **React 19 + TypeScript + Vite**.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 8
- **Icons:** Lucide React
- **GitHub Stats:** react-github-calendar
- **Styling:** Custom CSS (component-scoped)

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with profile image
│   ├── Hero.tsx            # Landing / hero section
│   ├── About.tsx           # About me section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Projects showcase with filtering
│   ├── GitHubActivity.tsx  # GitHub contribution calendar
│   ├── Skills.tsx          # Technical skills
│   ├── Contact.tsx         # Contact form / links
│   ├── Footer.tsx          # Footer
│   └── BrandIcons.tsx      # Reusable brand icon components
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |
