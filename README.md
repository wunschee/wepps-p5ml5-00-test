# \<wepps-p5ml5-00-test\>

**_JavaScript Development using p5.js framework and ml5.js interface_**

Testing p5 framework and ml5 interface offers (drawing, motion detection, speech, machine learning etc.)

- p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone

- ml5.js is an open source, friendly high level interface to TensorFlow.js, a library for handling GPU-accelerated mathematical operations and memory management for machine learning algorithms

## Sections

- [Architecture](#architecture)
- [Language](#language)
- [Development tool](#development-tool)
- [Testing tool](#testing-tool)
- [App location](#app-location)
- [Creating self-signed cerfificate](#creating-self-signed-cerfificate)
- [Needed steps for accessing certificate](#needed-steps-for-accessing-certificate)

## Architecture

- Node.JS *(v10.15.3)* JavaScript runtime [download](https://nodejs.org/en/)
- Express *(v4.17.1)* minimalist web framework for Node.JS
- p5.js *(v0.9.0)* JavaScript framework [visit](https://p5js.org/)
- ml5.js *(v0.4.1)* browser library [visit](https://ml5js.org/)

## Language

JavaScript

## Development tool

Visual Studio Code *(v1.38.1)* [download](https://code.visualstudio.com)

## Testing tool

Browser

## App location

* *https://localhost:4000*

## Creating self-signed cerfificate

- mkdir https
- cd https
- su
- openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

## Needed steps for accessing certificate

- chown pedro https/selfsigned.key
- chown pedro https/selfsigned.crt
