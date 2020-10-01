FROM node:14.11.0-alpine as build
WORKDIR /build

COPY . ./

RUN npm install
RUN npm run build

# ---

ENV PORT 80

FROM node:14.11.0-alpine
WORKDIR /opt/game-machine

COPY --from=build /build/www ./
COPY --from=build /build/Caddyfile .

RUN apk add caddy

ENTRYPOINT ["caddy"]
