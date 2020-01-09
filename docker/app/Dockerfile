# Set base image.
FROM node:12

# Set maintainer to Ayup Digital.
LABEL maintainer="Ayup Digital"

# Set the environment variables.
ENV PORT 80

# Install PM2.
RUN npm install pm2 -g

# Copy the packaged app (only used when deploying).
RUN mkdir -p /var/www/html
COPY packaged /var/www/html
RUN chown -R www-data: /var/www/html

# Expose port 80 for HTTP access.
EXPOSE 80

# Set the working directory to the project root.
WORKDIR /var/www/html

# Set default command to start the app using PM2.
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
