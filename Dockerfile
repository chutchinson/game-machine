FROM node:14.11.0-alpine as build
WORKDIR /build

COPY . ./

RUN npm install
RUN npm run build

# ---

FROM node:14.11.0-alpine
WORKDIR /opt/game-machine

COPY --from=build /build/www ./
RUN npm install -g serve

EXPOSE 5000
ENTRYPOINT ["serve"]
