## CRWN Clothing
Clothing shop

## Features
✔️ Authentication Google account
✔️ Authentication with email & password
✔️ Persistant data with local storage
✔️ Asynchronous events handling
✔️ Stripe payments

## Stack
**Deployment**: *Heroku*
**Design**: *Sass & Styled Components*
**Authentication**: *Firebase auth*
**Database**: *Firebase Firestore*
**Backend**: *Firebase & NodeJs*
**Libraries**: 
    - *redux-logger*: comsole logging redux data flow
    - *redux*: State management
    - *redux-thunk*: handling asynchronous events
    - _redux-saga_: handling asynchronous events keeping actions pure
    - *axios*: implement api requests with ease 
    - *reselect*: reusing redux selectors in a performant way
    - *redux-persist*: storing data in local storage

## Usage
<details>
<summary>Setup Heroku</summary>

**Bash** *To setup heroku*
```bash
#first
~ 
```
</details>
<details>
<summary>Setup Stripe Payments</summary>

**First of all** *You need first to get your secret key from* [here](https://dashboard.stripe.com/test/apikeys) <br>
**Then**
```bash
# Rename example.env to .env
~ mv example.env .env
```
**Finally** *copy your secret key inside .env folder*
>! You don't need to put it in quotation marks '' ""
```
STRIPE_SECRET_KEY=YOUR_SECRET_KEY_GOES_HERE
```
</details>
<summary>Setup Database</summary>

**Bash** *To setup Database*
```bash
#first
~ 
```
</details>