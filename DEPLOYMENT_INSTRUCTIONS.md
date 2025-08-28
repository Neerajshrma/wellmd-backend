# CapRover Deployment Instructions

## AWS S3 Environment Variables

Add these environment variables in your CapRover app settings:

```
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=well-md-storage
```

**Note**: Replace the placeholder values with your actual AWS credentials from the image you provided.

## Steps to Deploy

1. **Set Environment Variables in CapRover**:
   - Go to your app in CapRover dashboard
   - Navigate to "App Configs" → "Environment Variables"
   - Add the AWS credentials above

2. **Deploy the Application**:
   - Push your code to the repository
   - CapRover will automatically rebuild and deploy

3. **Migrate Existing Images** (if any):
   ```bash
   # Run this command on your server or locally with proper AWS credentials
   node scripts/migrate-images-to-s3.js
   ```

4. **Test the Integration**:
   - Upload an image through Strapi admin
   - Verify the image URL points to S3: `https://well-md-storage.s3.us-east-1.amazonaws.com/...`

## Important Notes

- **Never commit actual AWS credentials to git** - Use environment variables only
- Images will now persist across deployments and restarts
- S3 bucket `well-md-storage` must exist and have proper permissions
- All new uploads will automatically go to S3
