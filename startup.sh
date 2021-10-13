#!/bin/bash
echo shutting down container
docker-compose down

echo building backend container
cd ./backend
docker build --tag=nest_docker .

docker-compose up
echo everything done
