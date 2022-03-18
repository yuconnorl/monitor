FROM node:16 as build-stage
WORKDIR /app
ARG TAG_NAME='tag name'
COPY package*.json yarn.lock ./
RUN  yarn
COPY . .
RUN REACT_APP_TAG_VERSION=${TAG_NAME} yarn build

FROM nginx as production-stage
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
