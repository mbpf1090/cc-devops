[![Build Docker Image CI](https://github.com/mbpf1090/cc-devops/actions/workflows/docker-build.yml/badge.svg?branch=main)](https://github.com/mbpf1090/cc-devops/actions/workflows/docker-build.yml)
# Requirements

- [x] You will create some CI task for a naked nest.js application
- [x] You generate a naked nest.js application using
- [x] Create a Dockerfile that puts your web application into an image with traefic or nginx or kong (should be executable then)
- [x] Add a basic unit test with a test framework of your choice
- [ ] Add a basic integration test with a test framework of your choice
- [ ] Create npm configuration
- [x] You then generate a CI pipeline with a gh actions
- [ ] The image must be signed with cosign
- [ ] The image must be scanned for vulnerabilities by tool of choice
- [ ] The build should be green
- [x] The generated image must be deployed to ANY container registry
