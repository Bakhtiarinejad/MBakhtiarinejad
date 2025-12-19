# Deployment Guide for Cloudflare Pages

## Step-by-Step Instructions

### 1. Prepare Your Repository

Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Access Cloudflare Dashboard

1. Go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2. Log in to your Cloudflare account
3. Navigate to **Pages** in the left sidebar

### 3. Create a New Project

1. Click **Create a project**
2. Click **Connect to Git**
3. Select your Git provider (GitHub, GitLab, etc.)
4. Authorize Cloudflare to access your repositories
5. Select the repository containing your website code

### 4. Configure Build Settings

Fill in the following build configuration:

- **Project name**: `personal-website` (or your preferred name)
- **Production branch**: `main` (or `master` depending on your default branch)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `website` (if your website folder is in a monorepo, otherwise leave empty)

### 5. Environment Variables (Optional)

If you need any environment variables, add them in the **Environment variables** section.

### 6. Deploy

1. Click **Save and Deploy**
2. Cloudflare will automatically:
   - Install dependencies (`npm install`)
   - Run the build command (`npm run build`)
   - Deploy the `dist` folder to Cloudflare Pages

### 7. Custom Domain (Optional)

1. After deployment, go to your project settings
2. Click **Custom domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

### 8. Automatic Deployments

Cloudflare Pages will automatically deploy:
- Every push to your production branch (usually `main`)
- Pull requests will get preview deployments

## Build Configuration Summary

```
Framework preset: None (or Vite if available)
Build command: npm run build
Build output directory: dist
Root directory: website (if in monorepo)
Node version: 18 or higher
```

## Troubleshooting

### Build Fails

1. Check the build logs in Cloudflare dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility
4. Check that the build output directory matches your Vite config

### Routing Issues

The `_redirects` file in the `public` folder ensures all routes redirect to `index.html` for client-side routing to work properly.

### Presentation Not Loading

1. Verify `presentation-options-trading.html` is in the `public` folder
2. Check the browser console for 404 errors
3. Ensure the presentation ID matches in `src/data/courses.ts`

## Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

