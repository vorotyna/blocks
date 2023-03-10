# Blocks

Blocks is a scheduling React app that allows a user to create, delete or edit an interview appointment.

## Learning Goals

- Build a SPA with React.
- Learn how to implement unit, integration and E2E testing.

## Features

- A user can book interviews between Monday and Friday.
- A user can book, edit or delete an interview appointment.
- The list of days updated the user about how many interview slots are available for each day.
- A user is shown a status indicator while asynchronous operations are in progress.
- The application makes API requests to load and persist data.

## Getting Started

- `git clone` this project.
- Install dependencies using `npm install`.
- Run Webpack Development Server using `npm start`
- Run tests:
  - Run Jst Test Framework with `npm test`.
  - Run Storybook Visual Testbed with `npm run storybook`.
  - Run Cypress with `npm run cypress`.

## Dependencies

- React
- Babel
- Storybook
- Cypress
- Jest
- Prop-Types
- Axios
- Classnames
- CSS
- SASS
- PostegreSQL
- NodeJS

## Additional Information

- The server runs through another repository, `blocks-api`, on port 8001.
- Testing with Cypress requires three terminal windows to be open:
  1. Run the `npm run test:server` comman in the `blocks-api` directory.
  2. Run `npm start` from the root of `blocks` directory.
  3. Run `npm run cypress` from the root of `blocks` directory.

## Screenshots

### App Overview

!["Main page"](https://github.com/vorotyna/blocks/blob/master/docs/main-page.png?raw=true)

!["Appointment form"](https://github.com/vorotyna/blocks/blob/master/docs/appointment-form.png?raw=true)

!["Delete appointment"](https://github.com/vorotyna/blocks/blob/master/docs/delete-appointment.png?raw=true)

!["Error"](https://github.com/vorotyna/blocks/blob/master/docs/error.png?raw=true)

### Testing Results

!["Cypress"](https://github.com/vorotyna/blocks/blob/master/docs/cypress.png?raw=true)

!["Coverage report"](https://github.com/vorotyna/blocks/blob/master/docs/coverage-report.png?raw=true)
