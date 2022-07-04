# fflutter

> fflutter is CLI Application built with node js to make integrating flutter with firebase easier than ever, with one command you will create a flutter firebase project only in android.

## main Features

* create a new flutter project
* init firebase  in the project
* add firebase code to the gradle 
* generate firebase project information to add it in firebase console
* add firebase core pub dependency  in pubspec.yaml file
* intialize firebase in main.dart file
* import 'package:firebase_core/firebase_core.dart'; in main.dart file


## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Project Name](#project-name)
  - [main Features](#main-Features)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)  
    - [Running ](#Running)
    - [note](#note)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)


To install and set up the library, run:

```sh
$ npm i fflutter
$ sudo npm link fflutter
```



## Usage



### Running the commend

```sh
$ fflutter create
```



### Note

* Don't forget to download the google-services.json file from the firebase console.
* Don't forget to add  async  in your main function



## Credits

TODO: 
* make it available for other platforms 


## Built With

* node.js
* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Abde lattif Ben kaida** - *Initial work* - [abdelaatife](https://github.com/abdelaatife)



## License

[ISC License](https://opensource.org/licenses/ISC) © abdellatif
