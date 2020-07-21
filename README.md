# docker-compose-examples

This repo has docker-compose files for different set of docker images/containers.

Follow below steps to setup docker:-

1. Clone this repo.
2. `cd` to the directory, as you need.
3. Run `docker-compose build` to build the images as per `docker-compose.yml` file of the directory. If there is no build tag in YAML/YML file, use `docker-compose pull`.
4. Run `docker-compose up -d` to create and start all containers in detached mode.
5. We can add multiple services to create set of containers for use in an application.
