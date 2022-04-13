FROM node:16-slim

WORKDIR /opt/app/

EXPOSE 3000

ARG NODE_ENV="production"
ENV NODE_ENV "${NODE_ENV}"

# Install npm modules for app
COPY package.json ./
COPY client/package.json ./client/
COPY server/package.json ./server/

RUN echo "Installing npm modules..." && \
    NODE_ENV=development npm install || exit 1 && \
    echo "npm modules installed." && \
    npm cache clean --force

# Copy files for app
COPY . /opt/app/

# Build for production env
RUN echo "Building app...\n" && \
    npm run build || exit 1 && \
    echo "build was completed."

# Start app
CMD ["npm", "start"]
