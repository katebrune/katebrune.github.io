FROM nginx:alpine

WORKDIR /app

COPY storybook-static .

RUN ls -alh

COPY .storybook/nginx.conf /etc/nginx/nginx.conf