# CapRover Deployment Guide for Well-MD Backend

This guide will help you deploy your Strapi backend application to CapRover.

## Prerequisites

1. **CapRover Server**: Make sure you have a CapRover instance running
2. **CapRover CLI**: Install globally with `npm install -g caprover`
3. **Domain**: A domain or subdomain pointing to your CapRover server

## Deployment Files Created

- `captain-definition`: CapRover configuration file
- `Dockerfile`: Docker container configuration
- `.dockerignore`: Files to exclude from Docker build
- `.env.production`: Production environment template
- `deploy-caprover.sh`: Automated deployment script

## Step-by-Step Deployment

### 1. Prepare Your CapRover Server

Make sure your CapRover dashboard is accessible and you have admin access.

### 2. Create a New App in CapRover

1. Go to your CapRover dashboard
2. Click "Apps" → "Create New App"
3. Enter app name: `well-md-backend`
4. Click "Create New App"

### 3. Configure Environment Variables

In your CapRover app settings, add these environment variables:

```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=1337

# Generate secure random values for these:
APP_KEYS=your-secure-app-key-1,your-secure-app-key-2
API_TOKEN_SALT=your-secure-api-token-salt
ADMIN_JWT_SECRET=your-secure-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-secure-transfer-token-salt
JWT_SECRET=your-secure-jwt-secret
ENCRYPTION_KEY=your-secure-encryption-key

# Database (SQLite by default, or configure external DB)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

### 4. Deploy Your Application

#### Option A: Using the Deployment Script
```bash
./deploy-caprover.sh
```

#### Option B: Manual Deployment
```bash
# Create deployment package
tar -czf well-md-backend.tar.gz \
    --exclude=node_modules \
    --exclude=.git \
    --exclude=.tmp \
    --exclude=dist \
    --exclude=.env \
    --exclude=database \
    .

# Deploy using CapRover CLI
caprover deploy -t well-md-backend.tar.gz
```

#### Option C: Upload via Dashboard
1. Create the tar.gz file as shown above
2. Go to your app in CapRover dashboard
3. Click "Deployment" tab
4. Upload the `well-md-backend.tar.gz` file

### 5. Configure Domain and HTTPS

1. In CapRover dashboard, go to your app
2. Click "HTTP Settings"
3. Add your domain
4. Enable HTTPS
5. Force HTTPS redirect

### 6. Database Considerations

**For Production**: Consider using PostgreSQL or MySQL instead of SQLite:

```bash
# Add these environment variables for external database
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-username
DATABASE_PASSWORD=your-db-password
DATABASE_SSL=false
```

### 7. Verify Deployment

1. Check app logs in CapRover dashboard
2. Visit your domain to confirm Strapi is running
3. Access admin panel at `https://yourdomain.com/admin`

## Security Checklist

- [ ] Generate secure random values for all secrets
- [ ] Use external database for production
- [ ] Enable HTTPS
- [ ] Configure proper CORS settings
- [ ] Set up regular database backups
- [ ] Monitor application logs

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check Docker logs in CapRover
2. **App Won't Start**: Verify environment variables
3. **Database Issues**: Check database connection settings
4. **Memory Issues**: Increase app memory in CapRover settings

### Useful Commands:

```bash
# View app logs
caprover logs -a well-md-backend

# Restart app
caprover restart -a well-md-backend
```

## GitHub Webhook Auto-Deployment

✅ **Configured for automatic deployment via GitHub webhooks**

Every push to the `main` branch will automatically trigger a new deployment to CapRover.

## Support

If you encounter issues, check:
- CapRover documentation
- Strapi deployment guides
- Application logs in CapRover dashboard
- GitHub webhook delivery logs in repository settings
