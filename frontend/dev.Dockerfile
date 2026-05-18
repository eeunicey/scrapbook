# --- SOURCE STAGE ---
FROM node:22-alpine AS source

ARG TARGET_BRANCH=test

RUN apk add --no-cache git

ADD https://api.github.com/repos/eeunicey/scrapbook/git/refs/heads/${TARGET_BRANCH} /version.json

RUN git clone -b ${TARGET_BRANCH} https://github.com/eeunicey/scrapbook.git /src

RUN ls /src/frontend

# --- BUILD STAGE ---
FROM node:22-alpine AS build

# dependencies
COPY --from=source /src/frontend /app

WORKDIR /app

# install dependencies
RUN npm install

# build application
RUN npm run build

# --- SERVE STAGE ---
FROM nginx:alpine AS serve

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]