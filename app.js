
//Esta es mi función

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3))

module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro){
    let eurToUsd = euro * oneEuroIs["USD"];
    return eurToUsd;
}

function fromDollarToYen(dollar){
    let euro = dollar / oneEuroIs["USD"];
    return euro * oneEuroIs["JPY"];
}

function fromYenToPound(yen){
    let euro = yen / oneEuroIs["JPY"];
    return euro * oneEuroIs["GBP"];
}

console.log(fromYenToPound(10))

