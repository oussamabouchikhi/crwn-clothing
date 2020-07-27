const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const port = process.env.PORT || 5000;

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    // Serve staic files from client/build
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        /* 
            Send index.html for all requests, as all our React code 
            will be transpiled in production
        */
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    })
});


app.listen(port, error => {
    if (error) throw error;
    console.log(`App running at http://localhost:${port}`);
});