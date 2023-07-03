# Advice generator app - Frontend Mentor solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

<img src="./public/desktop-design.jpg" alt="Desktop View" height="200">
<img src="./public/mobile-design.jpg" alt="Mobile View" height="200">

### Links

- Solution URL: [GitHub](https://github.com/arn28/advice-generator)
- Live Site URL: [GitHub Pages](https://arn28.github.io/advice-generator)

## My process

In my process, I began by setting up a React project using Yarn. I then installed necessary dependencies such as Ant Design v5, Axios, and Sass. With the foundation in place, I proceeded to create essential components like the CardContainer and dice Button. As the project progressed, I customized the default styles of Ant Design, adjusting colors and applying specific style properties to the components using Sass preprocessor. Leveraging Sass features like variables and mixins, I achieved the desired look and feel. Lastly, I implemented an endpoint to interact with an advice generator API. Utilizing React hooks, I fetched the API response and seamlessly integrated it into the components for display.

### Built with

- [React](https://reactjs.org/) - JS library
- [Ant Design](https://ant.design/) - UI component library
- Typescript
- CSS custom properties
- [Sass](https://sass-lang.com/) - preprocessor
- [Axios] (https://axios-http.com/docs/intro) promise-based HTTP Client

### Continued development

For ongoing development, there are a couple of additional features I would like to implement. Firstly, I plan to incorporate a theme switcher functionality that allows users to toggle between light and dark themes. This will enhance the user experience and cater to different preferences.

Additionally, I aim to integrate a translator feature to provide language localization for the advice generated. By utilizing translation APIs or libraries, users will have the option to view the advice in their preferred language, making the application more inclusive and accessible.

## Author

- Github - [Arnold Balabarca](https://github.com/arn28)
- Frontend Mentor - [@arn28](https://www.frontendmentor.io/profile/arn28)
