function validatePrice(price) {
    if (price % instrument.tickSize !== 0) {
        return false; // Price does not adhere to tick size rules
    }
    return true; // Valid price
}

// Example usage:
let price = 102.01;
if (validatePrice(price)) {
    console.log(`Price ${price} is valid.`);
} else {
    console.log(`Price ${price} is not valid according to tick size ${instrument.tickSize}.`);
}
