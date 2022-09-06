# build environment
FROM node:14-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./

RUN apk --no-cache add curl
RUN apt-get -y install default-jre

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run keycloak

COPY build_keycloak/target/*.jar /my-theme

# # production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
# CMD nginx -g 'daemon off;'
