# Court Booking

A website where you rent a court for your favourite sport and rent it out for a couple of hours!

## Description

This app is a place where users can find a ideal location to reserve a court for their favourite sport. Users can navigate the home page with all court listings and filter them using a drop-drop for their location and the types of sport they host. Users can find the times the court is reserved, search for a perfect day in advance that they would like to reserve the court and book it. Users can checkout securely using stripe and pay online.

Animal-Pals is built with the next.js app version to have both server side and client side rendering. The project uses typescript to aid in fixing run-time errors and making sure props are used with the correct types. The back-end is built with mySql from Planetscale and prisma. Users can register or sign up with their google accounts using clerk as a authetication provide. Users can checkout online using stripe. The app is styled for mobile and desktop using taliwindCSS. Other packages such as react-big-calendar, axios, react-toastify provide features to show notifcations, show calendar, and create http requests.

# Getting Started

### Dependencies

This project requires node.js to be installed inorder to be run

### Installing

- Clone the project
- Create a mongoDB database
- Create an env file including the environmental variables
- Run the command npx prisma db push to load the tables into mongoDB
- Run the command npm install to install packages

### Executing program

- To execute run the command "npm run dev"

## Authors

Jason mac  
[@JasonMaC](https://github.com/JasonMac123/)

## Version History

- 0.1
  - Initial Release
