# Personal Website

A modern personal website built with React, TypeScript, and Tailwind CSS, featuring courses and presentations.

## Features

- 🎓 Course catalog with detailed course pages
- 📊 Interactive presentation viewer
- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🚀 Ready for Cloudflare Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installations

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment to Cloudflare Pages

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)

3. Navigate to **Pages** → **Create a project**

4. Connect your Git repository

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `website` (if deploying from monorepo)

6. Deploy!

The site will be automatically deployed on every push to your main branch.

## Project Structure

```
website/
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── pages/          # Page components (HomePage, CoursePage, etc.)
│   ├── data/           # Course and presentation data
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Entry point
├── public/             # Static assets and presentations
└── dist/              # Build output (generated)
```

## Adding New Courses

Edit `src/data/courses.ts` to add new courses and presentations.

## License

MIT

