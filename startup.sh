#!/bin/bash
echo "############# Starting Docker container #################"
echo shutting down container
docker-compose down
docker-compose up -d
echo everything done
