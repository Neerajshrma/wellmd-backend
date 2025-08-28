const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

class ImageMigration {
  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    this.bucketName = process.env.AWS_S3_BUCKET || 'well-md-storage';
  }

  async uploadToS3(filePath, s3Key, contentType) {
    try {
      const fileContent = fs.readFileSync(filePath);
      
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: s3Key,
        Body: fileContent,
        ContentType: contentType,
        ACL: 'public-read',
      });

      await this.s3Client.send(command);
      const url = `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
      console.log(`✅ Uploaded: ${filePath} -> ${url}`);
      return url;
    } catch (error) {
      console.error(`❌ Failed to upload ${filePath}:`, error.message);
      throw error;
    }
  }

  getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
    };
    return contentTypes[ext] || 'application/octet-stream';
  }

  async migrateDirectory(localDir, s3Prefix = '') {
    if (!fs.existsSync(localDir)) {
      console.log(`Directory ${localDir} does not exist. Skipping...`);
      return;
    }

    const files = fs.readdirSync(localDir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    for (const file of files) {
      const filePath = path.join(localDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.migrateDirectory(filePath, `${s3Prefix}${file}/`);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        const s3Key = `${s3Prefix}${file}`;
        const contentType = this.getContentType(filePath);
        
        try {
          await this.uploadToS3(filePath, s3Key, contentType);
        } catch (error) {
          console.error(`Failed to migrate ${filePath}`);
        }
      }
    }
  }

  async run() {
    console.log('🚀 Starting image migration to S3...');
    console.log(`Bucket: ${this.bucketName}`);
    console.log(`Region: ${process.env.AWS_REGION}`);
    
    // Migrate existing uploads
    const uploadDirs = [
      './data/uploads',
      './public/uploads'
    ];

    for (const dir of uploadDirs) {
      console.log(`\n📁 Migrating ${dir}...`);
      await this.migrateDirectory(dir, 'uploads/');
    }

    console.log('\n✅ Migration completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Update your Strapi database to point image URLs to S3');
    console.log('2. Test the application to ensure images load correctly');
    console.log('3. Remove local image files after confirming S3 migration');
  }
}

// Run migration if called directly
if (require.main === module) {
  const migration = new ImageMigration();
  migration.run().catch(console.error);
}

module.exports = ImageMigration;
