FROM mysql:5.7.26

ENV MYSQL_ROOT_PASSWORD pass

RUN mkdir /usr/sql
RUN chmod 644 /usr/sql

ADD ["completeSetup.sql", "/usr/sql/init.sql"]

COPY ./completeSetup.sql /docker-entrypoint-initdb.d/