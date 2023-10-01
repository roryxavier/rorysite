FROM nginx:alpine
#
## Copy the built files from the builder stage to the nginx container
COPY ./build/* /usr/share/nginx/html
#
## Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]