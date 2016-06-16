## ---------------------------------------------------------------
    ## Experimental.  Do NOT use for now.
## ---------------------------------------------------------------
FROM ubuntu:16.04

## Install tools.
RUN apt-get update && apt-get install -y \
    nano
    php-cli

## Enables nano to work with terminal/SSH.
ENV TERM xterm

## Docker configurations.
EXPOSE 80

## Execute PHP5 CLI for Development.
RUN php -S 0.0.0.0:80
