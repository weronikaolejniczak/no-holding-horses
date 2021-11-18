# No Holding Horses 🐎

Check it out [here](http://weronikaolejniczak.pl/no-holding-horses/)!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with TypeScript configuration.

No Holding Horses is a race betting application, where you can see all the active and inactive races, and place your bets!

## Overview

### Tech stack

- React with Hooks
- Redux with Immer, Reselect and store hydration through LocalStorage,
- MaterialUI components to make the UI clean and simple, and the development faster and easier.

### Features

- listing the available races,
- filtering the races by their status (active/inactive),
- displaying more information about the race,
- a form for placing a bet,
- persisting bets tab with the list of all bets and their details.

You can check out plans for the future in the `TODO.md` file!

## Available Scripts

Install the dependencies by running: `yarn install`

Add your `.env` file:

`REACT_APP_RACES_API_URL=https://my-json-server.typicode.com/hdjfye/bet-api/`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test --coverage`

Launches the test runner in the interactive watch mode.\
Generates a coverage report.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
