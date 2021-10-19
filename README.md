[![Build Docker Image CI](https://github.com/mbpf1090/cc-devops/actions/workflows/docker-build.yml/badge.svg?branch=main)](https://github.com/mbpf1090/cc-devops/actions/workflows/docker-build.yml)


# Cloud Computing Devops FH Technikum WS 21/22

This repository is part of the Docker/CI assignment.
It contains a nest.js backend server and a nginx proxy server.
For both a docker image will be generated.
Two CI pipelines have been implemented:
- Main
- Release

## MAIN branch
The main branch CI pipeline is setup with GitHub Actions.
These consist of:
- Build of docker image for the backend
- Basic unit test with Jest
- Basic integration test with Cypress

## RELEASE branch
The release branch contains the unit/integration tests as well as:
- Pushing the docker image to Docker Hub, if the build succeeds
- Signing the image with Cosign and pushing the signature to Docker Hub
- Validating the signature
- Scanning the image for vulnerabilities using Anchore
