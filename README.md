

# GWatches Online Store

Table of content:

- [GWatches Online Store](#gwatches-online-store)
    + [Description](#description)
    + [Technologies](#technologies)
    + [Project overview](#project-overview)
      - [Home page](#home-page)
      - [Shop page](#shop-page)
      - [Category page](#category-page)
      - [Sign in page](#sign-in-page)
      - [Adding items in the shopping cart](#adding-items-in-the-shopping-cart)
      - [Checkout](#checkout)
    + [Installation](#installation)
    + [Testing](#testing)
      - [Coverage](#coverage)
    + [Future improvements](#future-improvements)

## Description

GWatches is online store platform for watches. It includes navigation and routing that takes user to different pages with multiple categories of items so they are able to add them in their cart. Users can register and sing in with their Google profile or with email/password traditional option). From that cart panel the customers are able to checkout, where they can increase or decrease the quantity of the items and see the live changes. Furthermore, the application provides a payment option via Stripe API, currently working in test mode.

## Technologies

Technologies for developing the project:

- **React**
- **Redux**
- Integration with **Firebase**.
- Integration with **Stripe API** for handling payments.

## Project overview

### Home page

![image-20200616001607905](https://i.ibb.co/ZXw7zGW/image-20200616001607905.png)



### Shop page

In the shop page 4 items from each category are displayed. User can see all the items in a particular category by clicking in the category name

![image](https://i.ibb.co/Jjw3s2W/image.png)

![image](https://i.ibb.co/gjDx0sK/image.png)

### Category page

![image](https://i.ibb.co/7JHRcVW/image.png)



### Sign in page

User can sign in with their email or password if they already have an account. Otherwise they can register or can sign in using Google. Once the user sign in SIGN OUT option is displayed instead of SIGN IN. Currently in the application all the features are available for registered and unregistered users both. More features for registered users will be added soon.

![image](https://i.ibb.co/KmqQ6Hm/image.png)

### Adding items in the shopping cart

Users can view all the selected items in the cart panel:

![image](https://i.ibb.co/wNhyF78/image.png)

### Checkout

In the checkout panel users can increase or decrease the quantity of the items and see the live changes

![image](https://i.ibb.co/7Kfr62P/image.png)

By clicking **Pay now** button users are able to provide details for delivery:

![image](https://i.ibb.co/vkZ1mqz/image.png)

After that they are able to insert credit cart information in order to make a payment. Please note that in the project we are in **test mode**- that means **we do not affect live data or interact with banking networks**. 

You can use the following **test credit card details** in order to simulate a payment:

**Credit card number: *4242 4242 4242 4242***

**Exp. date: *any future date***

**CVC: *123***

![image](https://i.ibb.co/z56BH5N/image.png)

The owner of the online store (in my project that is me) is able to follow each transaction and different reports via **Stripe platform**:

![image](https://i.ibb.co/QXy6Nw6/image.png)

## Installation

1. Clone the repo;

2. `cd client`- Navigate to the client directory

3. `yarn install` or `npm install`

4. `yarn start` or `npm start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   For running the payment feature in test mode:

   1. `cd ..`
   2. `yarn install` or `npm install`
   3. `yarn start` or `npm start` - Runs node server.js. Server is running on port  5005;

## Testing

`yarn test` or `npm test` - Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Test Suites: 18 total
Tests: 42 total
Snapshots: 14 total

## Coverage

Use `yarn test --coverage --watchAll=false` to check the test coverage

You can find the coverage table here:

| File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s  |
| ----------------------------------- | ------- | -------- | ------- | ------- | ------------------ |
| All files                           | 50      | 41.07    | 29.17   | 51.53   |                    |
| src                                 | 0       | 0        | 0       | 0       |                    |
| App.js                              | 0       | 0        | 0       | 0       | ... 45,57,70,74,75 |
| index.js                            | 0       | 100      | 100     | 0       | 12                 |
| src/components/cart-dropdown        | 100     | 100      | 100     | 100     |                    |
| cart-dropdown.component.jsx         | 100     | 100      | 100     | 100     |                    |
| cart-dropdown.styles.jsx            | 100     | 100      | 100     | 100     |                    |
| src/components/cart-icon            | 75      | 100      | 25      | 90      |                    |
| cart-icon.component.jsx             | 57.14   | 100      | 25      | 80      | 22                 |
| cart-icon.styles.jsx                | 100     | 100      | 100     | 100     |                    |
| src/components/cart-item            | 100     | 100      | 100     | 100     |                    |
| cart-item.component.jsx             | 100     | 100      | 100     | 100     |                    |
| src/components/checkout-item        | 50      | 100      | 0       | 52.94   |                    |
| checkout-item.component.jsx         | 18.18   | 100      | 0       | 20      | ... 29,32,40,41,42 |
| checkout-item.styles.jsx            | 100     | 100      | 100     | 100     |                    |
| src/components/collection-item      | 57.14   | 100      | 0       | 61.54   |                    |
| collection-item.component.jsx       | 28.57   | 100      | 0       | 33.33   | 16,18,25,33        |
| collection-item.styles.jsx          | 85.71   | 100      | 0       | 85.71   | 37                 |
| src/components/collection-preview   | 77.78   | 100      | 50      | 77.78   |                    |
| collection-preview.component.jsx    | 60      | 100      | 50      | 60      | 25,27              |
| collection-preview.styles.jsx       | 100     | 100      | 100     | 100     |                    |
| src/components/collections-overview | 57.14   | 100      | 50      | 57.14   |                    |
| collections-overview.component.jsx  | 75      | 100      | 50      | 75      | 13                 |
| collections-overview.container.jsx  | 0       | 100      | 100     | 0       | 9,13               |
| collections-overview.styles.jsx     | 100     | 100      | 100     | 100     |                    |
| src/components/custom-button        | 70      | 0        | 50      | 70      |                    |
| custom-button.component.jsx         | 100     | 100      | 100     | 100     |                    |
| custom-button.styles.jsx            | 62.5    | 0        | 0       | 62.5    | 38,39,42           |
| src/components/directory            | 80      | 100      | 50      | 80      |                    |
| directory.component.jsx             | 75      | 100      | 50      | 75      | 14                 |
| directory.styles.jsx                | 100     | 100      | 100     | 100     |                    |
| src/components/form-input           | 100     | 75       | 100     | 100     |                    |
| form-input.component.jsx            | 100     | 75       | 100     | 100     | 13                 |
| form-input.styles.jsx               | 100     | 100      | 100     | 100     |                    |
| src/components/header               | 88.89   | 100      | 50      | 88.89   |                    |
| header.component.jsx                | 75      | 100      | 50      | 75      | 28                 |
| header.styles.jsx                   | 100     | 100      | 100     | 100     |                    |
| src/components/menu-item            | 33.33   | 100      | 0       | 33.33   |                    |
| menu-item.component.jsx             | 33.33   | 100      | 0       | 33.33   | 8,10               |
| src/components/sign-in              | 0       | 100      | 0       | 0       |                    |
| sign-in.component.jsx               | 0       | 100      | 0       | 0       | ... 26,30,31,33,37 |
| src/components/sign-up              | 0       | 0        | 0       | 0       |                    |
| sign-up.commponent.jsx              | 0       | 0        | 0       | 0       | ... 51,52,54,58,59 |
| src/components/stripe-button        | 11.11   | 100      | 0       | 11.11   |                    |
| stripe-button.component.jsx         | 11.11   | 100      | 0       | 11.11   | ... 10,19,22,23,27 |
| src/components/with-spinner         | 0       | 0        | 0       | 0       |                    |
| with-spinner.component.jsx          | 0       | 0        | 0       | 0       | 5,6,7,15           |
| with-spinner.styles.jsx             | 0       | 100      | 100     | 0       | 3,11               |
| src/firebase                        | 29.41   | 0        | 0       | 31.25   |                    |
| firebase.utils.js                   | 29.41   | 0        | 0       | 31.25   | ... 66,67,75,76,77 |
| src/pages/checkout                  | 88.89   | 100      | 50      | 88.89   |                    |
| checkout.component.jsx              | 75      | 100      | 50      | 75      | 41                 |
| checkout.styles.jsx                 | 100     | 100      | 100     | 100     |                    |
| src/pages/collection                | 66.67   | 100      | 50      | 72.73   |                    |
| collection.component.jsx            | 83.33   | 100      | 66.67   | 100     |                    |
| collection.container.jsx            | 0       | 100      | 0       | 0       | 9,10,13            |
| collection.styles.jsx               | 100     | 100      | 100     | 100     |                    |
| src/pages/homepage                  | 100     | 100      | 100     | 100     |                    |
| homepage.component.jsx              | 100     | 100      | 100     | 100     |                    |
| homepage.styles.jsx                 | 100     | 100      | 100     | 100     |                    |
| src/pages/shop                      | 0       | 100      | 0       | 0       |                    |
| shop.component.jsx                  | 0       | 100      | 0       | 0       | 14,16,20,22,38,39  |
| shop.styles.jsx                     | 0       | 100      | 100     | 0       | 3                  |
| src/pages/sign-in-sign-up           | 100     | 100      | 100     | 100     |                    |
| sign-in-and-sign-up.component.jsx   | 100     | 100      | 100     | 100     |                    |
| sign-in-and-sign-up.styles.jsx      | 100     | 100      | 100     | 100     |                    |
| src/redux                           | 0       | 0        | 100     | 0       |                    |
| root-reducer.js                     | 0       | 100      | 100     | 0       | 10,16              |
| store.js                            | 0       | 0        | 100     | 0       | 8,10,11,14,16      |
| src/redux/cart                      | 77.78   | 85.71    | 60      | 81.58   |                    |
| cart.actions.js                     | 100     | 100      | 100     | 100     |                    |
| cart.reducer.js                     | 100     | 100      | 100     | 100     |                    |
| cart.selectors.js                   | 41.67   | 100      | 0       | 50      | 9,14,23,27,28      |
| cart.types.js                       | 100     | 100      | 100     | 100     |                    |
| cart.utils.js                       | 80      | 75       | 85.71   | 85.71   | 14,23              |
| src/redux/directory                 | 75      | 100      | 33.33   | 85.71   |                    |
| directory.reducer.js                | 100     | 100      | 100     | 100     |                    |
| directory.selectors.js              | 50      | 100      | 0       | 66.67   | 7                  |
| src/redux/shop                      | 50      | 0        | 31.25   | 48.39   |                    |
| shop.actions.js                     | 78.57   | 100      | 71.43   | 72.73   | 29,30,32           |
| shop.reducer.jsx                    | 0       | 0        | 0       | 0       | 3,9,10,12,17,23,29 |
| shop.selectors.js                   | 42.86   | 0        | 0       | 50      | 7,13,17,18,23,28   |
| shop.types.js                       | 100     | 100      | 100     | 100     |                    |
| src/redux/user                      | 16.67   | 0        | 0       | 20      |                    |
| user.actions.js                     | 0       | 100      | 0       | 0       | 3                  |
| user.reducer.js                     | 0       | 0        | 0       | 0       | 3,7,8,10,15        |
| user.selectors.js                   | 50      | 100      | 0       | 66.67   | 7                  |
| user.types.js                       | 0       | 100      | 100     | 0       | 1                  |
|                                     |         |          |         |         |                    |

## Future improvements

That is the beginning. There will be additional features for the registered customers and especially for administrators.

Redux Thunk will be replaced with Saga.

