FROM teracy/angular-cli:latest

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY . ${APP_HOME}

EXPOSE 4200

# CMD ["/bin/bash"]