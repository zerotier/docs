FROM nginx:1.19.10

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html