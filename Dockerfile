FROM nginx:1.25.2

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html