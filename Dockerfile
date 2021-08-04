FROM nginx


RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm
RUN npm install
RUN npm build

EXPOSE 80

COPY /dist /usr/share/nginx/html

ENTRYPOINT nginx -g "daemon off;"
