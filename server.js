"use strict";
const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

const PORT = 8000;
app.listen(PORT);
// Existing /add endpoint for addition
app.get('/add', function (req, res) {
    const num1 = parseInt(req.query['num1']);
    const num2 = parseInt(req.query['num2']);
    // Check if both num1 and num2 are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Not a Number");
    }
    res.set("Content-Type", "text/plain");
    res.send((num1 + num2).toString());
});

// Updated /calculator endpoint to handle errors
app.get('/calculator', async function (req, res) {
    const operator = req.query['operator'];
    const num1 = Number(req.query['num1']);
    const num2 = Number(req.query['num2']);
    // Check if num1 or num2 are invalid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Not a Number");
    }
    let result = 0;
    // Handle the operator and perform calculations
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).send("Cannot divide by zero");
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).send("Incorrect Operator");
    }
    // Send the result as a string
    res.send(String(result));
});