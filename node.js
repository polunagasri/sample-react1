FROM node:24-alpine AS build
WORKDIR /nodeapp
ADD . /nodeapp
RUN npm install && npm run build

FROM nginx:alpine AS runtime
LABEL project="nodejsproject"
COPY --from=build /nodeapp/_static /usr/share/nginx/html
EXPOSE 80