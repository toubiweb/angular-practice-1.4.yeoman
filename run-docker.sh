#!/bin/sh

# create and run containers environment
docker-compose --project toubiweb/angular-tp --file ./docker/docker-compose.yml up -d

# enter to container
docker exec -it --user user toubiwebangulartp_web_1 bash