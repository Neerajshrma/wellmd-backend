#!/bin/bash

# CapRover Deployment Script for Strapi Backend
# Make sure you have CapRover CLI installed: npm install -g caprover

echo "🚀 Starting CapRover deployment for well-md-backend..."

# Check if caprover CLI is installed
if ! command -v caprover &> /dev/null; then
    echo "❌ CapRover CLI not found. Installing..."
    npm install -g caprover
fi

# Create a tarball of the project (excluding node_modules and other unnecessary files)
echo "📦 Creating deployment package..."
tar -czf well-md-backend.tar.gz \
    --exclude=node_modules \
    --exclude=.git \
    --exclude=.tmp \
    --exclude=dist \
    --exclude=.env \
    --exclude=database \
    .

echo "✅ Deployment package created: well-md-backend.tar.gz"
echo ""
echo "📋 Next steps:"
echo "1. Upload well-md-backend.tar.gz to your CapRover dashboard"
echo "2. Or use: caprover deploy -t well-md-backend.tar.gz"
echo "3. Set up environment variables in CapRover app settings"
echo "4. Enable HTTPS and set up your domain"
echo ""
echo "🔧 Important: Don't forget to configure your environment variables in CapRover!"
