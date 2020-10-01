FROM node:14.11.0-alpine as build
WORKDIR /build

COPY . ./

RUN npm install
RUN npm run build

# ---

FROM caddy:2.1.1-alpine
WORKDIR /usr/share/caddy

ENV PORT 80
COPY --from=build /build/www ./
COPY --from=build /build/Caddyfile /etc/caddy/Caddyfile