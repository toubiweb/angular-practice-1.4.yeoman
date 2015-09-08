#!/bin/sh

# build container
docker build -t="toubiweb/angular-tp" -f=docker/Dockerfile .
