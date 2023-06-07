FROM node:18-alpine AS build-stage

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install app dependencies
RUN npm install 

# copy everyting sourcecode to docker
COPY . ./

# run build
RUN npm run build 

#Stage 2
FROM nginx:1.25.0-alpine AS production-stage

WORKDIR /usr/share/nginx/html

# remove all default files nginx
RUN rm -rf ./*

# copy nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# copy all file and folder(dist) to workdir
COPY --from=build-stage /app/dist ./

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
