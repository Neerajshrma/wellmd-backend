# Use the official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /opt/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Strapi application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Create a non-root user to run the application
RUN addgroup -g 1001 -S nodejs
RUN adduser -S strapi -u 1001

# Change ownership of the app directory to the strapi user
RUN chown -R strapi:nodejs /opt/app
USER strapi

# Expose the port that the app runs on
EXPOSE 1337

# Define the command to run the application
CMD ["npm", "start"]
