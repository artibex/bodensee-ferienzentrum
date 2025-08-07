# Deployment Guide

## Quick Deploy Options

### 1. Replit (Recommended)
The easiest way to deploy this project:

1. **Fork or Import**: Import this GitHub repository to Replit
2. **Environment Setup**: Add any required environment variables in Replit Secrets
3. **Run**: Execute `npm run dev` - Replit will handle the rest
4. **Deploy**: Use Replit's built-in deployment feature for production

### 2. Vercel (Frontend Only)
For static deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Build and deploy
npm run build
vercel --prod
```

### 3. Render
1. Connect your GitHub repository to Render
2. Choose "Web Service"
3. Build command: `npm run build`
4. Start command: `npm start`

### 4. Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway deploy
```

### 5. Heroku
```bash
# Install Heroku CLI and login
heroku create your-app-name
git push heroku main
```

## Environment Variables

Make sure to set these in your deployment platform:

- `NODE_ENV=production`
- `PORT=5000` (or your platform's default)
- `SESSION_SECRET=your-secret-key`
- Database credentials (if using PostgreSQL)

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm start`
- **Type Check**: `npm run type-check`

## Performance Optimization

The project includes:
- Automatic image optimization
- CSS purging for smaller bundles
- Code splitting for faster load times
- Service worker ready (PWA compatible)

## Database Setup

By default, the app uses in-memory storage. For production:

1. Set up a PostgreSQL database
2. Add `DATABASE_URL` to environment variables
3. Run database migrations (if implemented)

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Lighthouse CI)

## Security Checklist

- [ ] Update SESSION_SECRET for production
- [ ] Enable HTTPS
- [ ] Set secure headers
- [ ] Validate all inputs
- [ ] Sanitize user content
- [ ] Rate limiting for forms

---

For detailed deployment instructions for specific platforms, check their official documentation.