# Front End Dashboard Task

This is a React project application that fetches and renders the list of dashboards available to a DHIS2 user.

## Overview

This application offers a dashboard view to manage and visualize data from an API for DHIS2 users. The users are able to filter through the diffrent dashboards and mark them as favorites using stars. 

[Screenshot](./public/screenshot.png?raw=true "ScreenShot")

## Deployment

The project is deployed and accessible [here](https://frontend-task-two-pi.vercel.app/).


## Getting Started

To run the application locally, follow these steps:

   * Clone the repository.
   * Navigate to the project directory.
   * Install dependencies using `yarn install`.  
   * Run tests using `yarn test` 
   * Start the application with `yarn start`.


## Project Architecture

* **Technology  Stack**: The project utilizes React for the front-end, which enables a modular, reusable, and responsive user interface. The project also uses the DHIS2 UI library that can be accessed [here](https://ui.dhis2.nu/)
* **Data Management**: Data loading and manipulation are handled through API calls and custom utility functions. Mock data is used in the test environment to simulate API behavior.
* **Testing**: The test suite integration tests for UI components. It employs Jest and React Testing Library.
* **Component Structure**: The dashboard application is composed of modular components, allowing scalability and easy maintenance.

## Project Resources

To access the JSON structure of the APIs, Click [here](https://gist.github.com/kabaros/da79636249e10a7c991a4638205b1726#file-imnyybfsxmm-json)
