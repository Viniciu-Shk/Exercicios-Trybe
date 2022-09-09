FROM node:15.4 AS primeiro-estagio
WORKDIR /./ReactJS
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.21-alpine AS segundo-estagio


COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


COPY --from=build /react-app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]