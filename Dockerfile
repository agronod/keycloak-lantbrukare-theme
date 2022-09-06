# build environment
FROM timbru31/java-node:11-jre-14 as build

RUN apt-get -qq update && apt-get -q -y install maven unzip

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run keycloak
