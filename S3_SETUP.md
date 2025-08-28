# AWS S3 Integration Setup

This document explains the AWS S3 integration for handling file uploads in your Strapi application.

## Overview

The application now uses AWS S3 for file storage instead of local file system. This prevents image loss during CapRover deployments and restarts.

## Configuration

### Environment Variables

The following environment variables have been added to `.env.example` and `.env.production`:

```bash
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=well-md-storage
```

### Strapi Configuration

- **`config/plugins.ts`**: Configured Strapi's upload plugin to use AWS S3 provider
- **S3 Service**: Created `src/services/s3.ts` for additional S3 operations

## Files Modified/Created

1. **`.env.example`** - Added AWS S3 environment variables
2. **`.env.production`** - Added AWS S3 environment variables  
3. **`config/plugins.ts`** - Configured S3 upload provider
4. **`src/services/s3.ts`** - S3 utility service
5. **`scripts/migrate-images-to-s3.js`** - Migration script for existing images

## Dependencies Installed

```bash
npm install @strapi/provider-upload-aws-s3 @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

## Migration Script

Run the migration script to upload existing local images to S3:

```bash
node scripts/migrate-images-to-s3.js
```

This script will:
- Upload all images from `data/uploads/` and `public/uploads/` to S3
- Maintain the same file structure in S3
- Set proper content types and public read permissions

## S3 Service Features

The `S3Service` class provides:
- **uploadFile()** - Upload files to S3
- **deleteFile()** - Delete files from S3  
- **getPresignedUrl()** - Generate secure URLs for private files
- **extractKeyFromUrl()** - Extract S3 key from URL

## Deployment Notes

### CapRover Environment Variables

In your CapRover app settings, add these environment variables:

```
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=well-md-storage
```

### S3 Bucket Configuration

Ensure your S3 bucket (`well-md-storage`) has:
- Public read access for uploaded files
- Proper CORS configuration if needed for web uploads
- Appropriate lifecycle policies for cost optimization

## Testing

1. Start your Strapi application
2. Upload an image through the admin panel
3. Verify the image URL points to S3 (should start with `https://well-md-storage.s3.us-east-1.amazonaws.com/`)
4. Confirm images load correctly in your frontend

## Benefits

- **Persistent Storage**: Images survive deployments and restarts
- **Scalability**: No local storage limitations
- **Performance**: CDN-like delivery from AWS infrastructure
- **Backup**: AWS handles redundancy and backup
- **Cost Effective**: Pay only for what you use

## Troubleshooting

- Verify AWS credentials are correct
- Check S3 bucket permissions
- Ensure bucket exists in the specified region
- Review CapRover logs for any S3-related errors
