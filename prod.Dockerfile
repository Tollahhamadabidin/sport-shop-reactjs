# Stage 1: Build React Project
FROM node:alpine AS builder
WORKDIR /app

# ចម្លង package.json រួច install dependencies
COPY package*.json ./
RUN npm install

# ចម្លង source code ទាំងអស់រួច build static files
COPY . .
RUN npm run build

# Stage 2: Production Server ជាមួយ Nginx
FROM nginx:alpine

# បង្កើត config សម្រាប់ React SPA routing ដោយស្វ័យប្រវត្តិ
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
    error_page 500 502 503 504 /50x.html; \
    location = /50x.html { \
        root /usr/share/nginx/html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# ចម្លង static build files ចេញពី dist ទៅកាន់ Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# ដំណើរការ Nginx នៅ background/foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]