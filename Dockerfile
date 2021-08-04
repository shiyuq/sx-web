FROM nginx

RUN npm install
RUN npm build

EXPOSE 80

COPY /dist /usr/share/nginx/html

ENTRYPOINT nginx -g "daemon off;"
