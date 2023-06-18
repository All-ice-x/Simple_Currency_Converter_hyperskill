const input = require('sync-input');
const exchangeRate = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75
};
const currencyTypes = Object.keys(exchangeRate);
let userInputCurrencyFrom;
let userInputCurrencyTo;
let userInputAmount;
let foundRateFrom;
let foundRateTo;
let result;
let option;

function greetings() {
    console.log('Welcome to Currency Converter!');
}

function showList() {
    console.log(`1 USD equals ${exchangeRate.USD} USD
1 USD equals ${exchangeRate.JPY} JPY
1 USD equals ${exchangeRate.EUR} EUR
1 USD equals ${exchangeRate.RUB} RUB
1 USD equals ${exchangeRate.GBP} GBP`);
}

function whatDoYouWant() {
    return Number(input(`What do you want to do?\n1-Convert currencies 2-Exit program\n`));
}

function sayGoodBye() {
    console.log('Have a nice day!');
}

function typeTheCurrencyFrom() {
    return userInputCurrencyFrom = input('What do you want to convert?\nFrom: ').toUpperCase();
}

function typeTheCurrencyTo() {
    return userInputCurrencyTo = input('To: ').toUpperCase();
}

function typeTheSum() {
    return userInputAmount = Number(input('Amount: '))
}

function findRate(inputCurrency) {
    let foundRate = Object.entries(exchangeRate).find((element, index, array) => {
            if (element[0] === inputCurrency) {
                return element[1]
            }
        }
    )
    return foundRate[1];
}


greetings();
showList();
while (true) {
    option = whatDoYouWant();
    if (isNaN(option)) {
        console.log('Unknown input');
    } else if (option < 1 || 2 < option) {
        console.log('Unknown input');
    }
    switch (option) {
        case 1:
            typeTheCurrencyFrom();
            if (currencyTypes.includes(userInputCurrencyFrom) === false) {
                console.log('Unknown currency');
            } else {
                typeTheCurrencyTo()
                if (currencyTypes.includes(userInputCurrencyTo) === false) {
                    console.log('Unknown currency');
                } else {
                    typeTheSum()
                if (isNaN(userInputAmount)) {
                    console.log('The amount has to be a number');
                } else if (userInputAmount < 1) {
                    console.log('The amount cannot be less than 1')
                } else {
                    foundRateFrom = findRate(userInputCurrencyFrom);
                    foundRateTo = findRate(userInputCurrencyTo)
                    result = (userInputAmount / foundRateFrom * foundRateTo);
                    console.log(`Result: ${userInputAmount} ${userInputCurrencyFrom} equals ${result.toFixed(4)} ${userInputCurrencyTo}`);
                }
            }}
            break
        case 2:
            sayGoodBye();
            process.exit(0);
    }
}










