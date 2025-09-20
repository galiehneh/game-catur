# Use nginx alpine as base image
FROM nginx:alpine

# Copy all HTML files to nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 80 (nginx default)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
