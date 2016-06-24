# Allows login
Upon visiting the site, an unauthenticated user will be met with a login screen.

Naming convention (facebook):
* **Log In** to authenticate users
* **Sign Up** to create new account for users

## Client
Description for clientside specs.

### Clientside Routes
**`/`** Will display Sign-in prompt or the main application screen
**`/settings`** Pane for app settings.
**`/users`** Pane for selecting active user.
**`/products`** (Can also be called inventory or something else). Place where products are created, their pictures selected, and their descriptions, price are entered.
**`/cart`** Screen for adding items and shaping client's order
**`/cart/checkout`** Final area for payment processing.
**`/accounting`** Area for accounting purposes. Can view payments history, issue refunds, etc.

## Server
Our app will be a Single Page Application (SPA). The server will only process GET requests for static assets (images, js, css) and requests related to DB queries. All other GET requests will be defaulted to a "catch all" route, i.e `app.get('/*')` that will return the single index.html page of the app.
### Routes
**Static assets** All static assets under `build`.

**`/` GET**. Response is HTML of index.html

**`/login` POST**. Request is `user` credentials in JSON.

If credentials **valid**, return JSON about the user info. As part of the JSON object, include JWT for that user.

If credentials **invalid**, return 403.

**`/signup POST`**.

**`/transactions` GET**. Returns array of transactions that fit query parameterrs

**`/transactions` POST**. Insert new transaction in DB.

**`/product` GET**.
**`/product` POST**.

**`/customer` POST**.
**`/customer` POST**.

### DB schema
`Users`
username
password
name
email

`Transactions`
Date
Amount
List of items (object, key is item, value is quantity purchased)
Customer number
Type/tender

`Inventory`
Item
quantity
price
name
photo?


# Allow one user
# Allow user to add inventory
# Allow form of payment
# Allow transaction which connects with inventory when sale is completed inventory is deducted
# Allow receipt of said transaction
