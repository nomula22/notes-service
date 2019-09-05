# My Notes App

Notes application built with Angular 6 (front-end), spring boot v2.x (back-end).

#### Features:
* View a list of all notes
* Create new notes, with a title and content
* Modify existing notes
* Delete existing notes

#### Validation rules:
* Title has a max length of 255 characters
* Note content has a max length of 1024 characters

### Pre-requisites:
* Maven
* Java 8
* Node.js
* Angular 6 or above

### Requirements:
* [My Notes Api](https://github.com/nomula22/notes-service) Running at http://localhost:8080/

## Install dependencies
* Navigate notes-serice/src/main/resources and run `ng build` to build.
* Run `mvn clean package` in the project home directory
* Finally, Run `java -jar target/notes-service-0.0.1-SNAPSHOT.jar`