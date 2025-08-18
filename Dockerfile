# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /opt/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Create a non-root user to run the application
RUN addgroup -g 1001 -S nodejs
RUN adduser -S strapi -u 1001

# Change ownership of the app directory to the strapi user
RUN chown -R strapi:nodejs /opt/app
USER strapi

# Build the Strapi application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 1337

# Define the command to run the application
CMD ["npm", "start"]
