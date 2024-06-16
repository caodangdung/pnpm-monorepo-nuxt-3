FROM node:14 as build
ARG APP_NAME=tpfico
ENV APP_NAME ${APP_NAME}

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# set work dir as app
WORKDIR /app
COPY . /app

# COPY . ./
# install all the project npm dependencies
# build the nuxt project to generate the artifacts in .output directory
RUN pnpm --filter nuxt3-websites-package install
RUN pnpm --filter ${APP_NAME} install && pnpm --filter ${APP_NAME} run build

# we are using multi stage build process to keep the image size as small as possible
FROM node:18-alpine3.17
ARG APP_NAME=tpfico
ENV APP_NAME ${APP_NAME}

# update and install latest dependencies, add dumb-init package
RUN apk update && apk upgrade && apk add dumb-init

# set work dir as app
WORKDIR /app
# copy the output directory to the /app directory from 
COPY --from=build /app/apps/${APP_NAME}/.output ./
# expose 8080 on container
EXPOSE 80

# set app host and port . In nuxt 3 this is based on nitor and you can read
#more on this https://nitro.unjs.io/deploy/node#environment-variables
ENV HOST=0.0.0.0 PORT=80 NODE_ENV=production
# start the app with dumb init to spawn the Node.js runtime process
# with signal support
CMD ["dumb-init","node","/app/server/index.mjs"]