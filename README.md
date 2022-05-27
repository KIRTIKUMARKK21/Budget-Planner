# DevJam Budget Planner
## The Last Budget Planner, Ever


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)



## Introduction:

We created a website that allows users to track their earnings, expenses, funds, savings, and investments.

Many people struggle to keep their savings and expenses in check. Budget Planner provides users with a comprehensive visual perspective of their spending habits, allowing them to easily decide, modify, and maintain their spending.

Budget Planner not only helps users visualize their expenses, but it also keeps them up to date on what's going on with the stocks they own and predicts future prices, allowing them to maximize their profit in the market.

## Table of Contents:
 
   * [Installation](#installation)
   * [Tech Stack](#tech-stack)
   * [Preview](#preview)
   * [Website link](#website-link)
   * [Presentation link](#presentation-link)
   * [screenshots](#screenshots)


## Installation

bash
  git clone https://github.com/KIRTIKUMARKK21/Budget-Planner
  cd Budget-Planner
  npm install
  

In the project directory, run
bash
  npm start
  
  
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
bash
  npm test
  
  
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
bash
  npm run build
  

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.    

## Tech Stack

1.  MERN
2. Material UI
3. Numpy
4. Pandas
5. Tensorflow
6. Streamlit
7. MatplotLib
8. MongoDB
9. Netlify

## Frontend Routes
### Stack used
- React js
- Mantine.dev
- Lodash
- react-router
- react-router-dom
- material UI
- Context API
- Chart js 
- @Nivo Chart js

| Syntax      | Description  |
| :---        |    :----:   |
| /login     | Route to Login|
| /register  | Route to Register|
| /expenses  | Route to Dashboard|
| /checkstockprices  | External Route to StreamLit for stock prediction algorithm|

## Backend Routes
### Tech Stack
- Node js v 16
- npm 
- lodash
- mongodb
- IEX Cloud API
- Cors
- Cookie Parser
- Mongoose
- mongodb
- JSON web token
- crypto js
#### Dev Dependencies
- Prettier
- Eslint
- nodemon

### ROUTES
##### USER :  /api/user/*
| Syntax      | Description |
| :---        |    :----:   |
| register| Sign Up New User       |
| login   | Sign In User an validate their auth credentials        |
| fetchuser| Fetch the current user in the backend via JWT token verification |
#### DATA : /api/data/*
| Syntax      | Description |
| :---        |    :----:   |
| addtorecord| Adding a record(Expense ,funds) in the individual table       |
| getcurrentprice   | Validates the symbols of Stock exchange and builds data set for bought price and current price of the Stock symbol        |
| addstock| Add or update a stock in the stock table |

## Preview

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## 🔗 Website Link
[Budget Planner website](https://katherinempeterson.com/)



## Presentation link
[presentation link](https://github.com/matiassingers/awesome-readme)



## Authors:

Team Name: Pegasus
- [Aditya Raj Rai](https://github.com/adityarai0705)
- [Kirti Kumar](https://github.com/KIRTIKUMARKK21)
- [Eleena Sarah Mathew](https://github.com/eleensmathew)
- [Subrat Pandey](https://github.com/badsubrat)
