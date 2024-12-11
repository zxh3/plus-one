# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json (if present) first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# docker build -t plus-one .
# docker run -it plus-one sh