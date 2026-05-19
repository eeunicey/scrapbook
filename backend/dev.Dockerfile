# --- BUILD ARGS ---
ARG TARGET_BRANCH=feat/app-structure

# --- SOURCE STAGE ---
FROM node:26-alpine AS source

ARG TARGET_BRANCH

RUN apk add --no-cache git

ADD https://api.github.com/repos/eeunicey/scrapbook/git/refs/heads/${TARGET_BRANCH} /version.json

RUN git clone -b ${TARGET_BRANCH} https://github.com/eeunicey/scrapbook.git /src 

# --- RUN STAGE ---
FROM node:26-alpine AS run

COPY --from=source /src/backend /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]