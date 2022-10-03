FROM --platform=linux/amd64 node:16-alpine3.14 AS builder
WORKDIR /app
COPY . /app/
RUN npm install --production && npm run build

# nginx state for serving content
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /usr/share/nginx/html/
COPY --from=0 /app/build /usr/share/nginx/html/