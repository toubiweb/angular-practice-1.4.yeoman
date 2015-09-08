# Pull base image.
FROM node:0.12
MAINTAINER Nicolas Toublanc <n.toublanc@gmail.com>

ENV APT_PACKAGES ruby-compass ruby-sass libvips-dev wget gdebi vim xdg-utils curl git

# install via APT (do not clean sources as we want to be able to install more packages from the development container)
RUN apt-get update && \
    apt-get install -q -y -o Acquire::Retries=10  $APT_PACKAGES

# install globally via npm
ENV GLOBAL_NPM_PACKAGES bower grunt-cli gulp forever yo generator-angular-fullstack generator-gulp-angular
RUN npm install -g $GLOBAL_NPM_PACKAGES

# define working directory (to build app)
WORKDIR /home/user/tp-angular

# development mode
ENV NODE_ENV development

# create single user with sudo rights and no password
ENV USER_HOME /home/user
RUN adduser --disabled-password --gecos '' user
RUN adduser user sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN ch

USER user

ENV PORT 3000

# define default command.
CMD /bin/bash

# Expose ports.
EXPOSE 9100 35729
