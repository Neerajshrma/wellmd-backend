import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

class S3Service {
  private s3Client: S3Client;
  private bucketName: string;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
    this.bucketName = process.env.AWS_S3_BUCKET || 'well-md-storage';
  }

  /**
   * Upload a file to S3
   */
  async uploadFile(key: string, body: Buffer | Uint8Array | string, contentType?: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
      ACL: 'public-read', // Make files publicly accessible
    });

    await this.s3Client.send(command);
    return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }

  /**
   * Delete a file from S3
   */
  async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    await this.s3Client.send(command);
  }

  /**
   * Generate a presigned URL for secure file access
   */
  async getPresignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    return await getSignedUrl(this.s3Client, command, { expiresIn });
  }

  /**
   * Extract S3 key from URL
   */
  extractKeyFromUrl(url: string): string | null {
    const regex = new RegExp(`https://${this.bucketName}\\.s3\\.[^/]+\\.amazonaws\\.com/(.+)`);
    const match = url.match(regex);
    return match ? match[1] : null;
  }
}

export default new S3Service();
