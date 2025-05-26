
# Deployment Guide

## GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

3. **Custom Domain Setup:**
   - Update CNAME files with your actual domain
   - In GitHub Pages settings, add your custom domain
   - Enable "Enforce HTTPS"

## DNS Configuration

For your domain registrar, add these DNS records:

**For apex domain (example.com):**
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

**For subdomain (www.example.com):**
```
CNAME    www    yourusername.github.io
```

## Alternative Deployment Options

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repo to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## Environment Setup

No environment variables are required for the current setup.
For future integrations (like Supabase), you'll need to configure them in your deployment platform.
