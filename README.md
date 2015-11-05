# react-boot

A "Hello World" using some interesting technologies.

Frontend:

* Server-side view rendering with **React**
* **Express** framework
* **Node.js**

Backend:

* **Spring Boot**

Infrastructure:

* **Nginx** as a reverse proxy

Development environment:

* **Vagrant** development environment
* **Ansible** provisioning


## Implementation status

Implemented so far:

* Configuring and provisioning a Vagrant box
* Starting a Spring Boot application
* Returning some JSON objects from a REST API
* Express app runs a basic route

To do:

* Connect frontend to REST API
* Use a database instead of hard-coded data
* Etc.


## Server configuration

The following configuration is built on the Vagrant box:

* Nginx listens on port 80 (Vagrant forwards to this port from port 12345)
* URIs starting with `/api/` are forwarded to the Spring app (port 8080)
* Other requests are forwarded to the Node app (port 3000)


## Running

Start the Vagrant box and connect to it:

    vagrant up
    vagrant ssh

Compile and start the backend app:

    cd ~/project/backend
    ./gradlew build
    java -jar build/libs/react-boot-backend-0.0.1.jar

Start the frontend app:

    cd ~/project/frontend
    npm install
    node server

The frontend app should now be visible at <http://127.0.0.1:12345/>.
