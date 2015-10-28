# react-boot

A "Hello World" using some interesting technologies.

Frontend:

* React
* Express framework
* Node.js

Backend:

* Spring Boot

Infrastructure:

* Nginx as a reverse proxy

Development environment, provisioning etc.

* Ansible
* Vagrant


## Implementation status

Implemented so far:

* Provisioning a Vagrant box
* Starting a Spring Boot application
* Returning some JSON objects from a REST API


## Running

Start the Vagrant box and connect to it:

    vagrant up
    vagrant ssh

Start the frontend app:

    cd ~/project/frontend
    node server

Start the backend app:

    cd ~/project/backend
    java -jar build/libs/react-boot-backend-0.0.1.jar
