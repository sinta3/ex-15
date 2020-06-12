function changeNumber(number) {
    return number * 9/5;
};

function getFahrenheit(celsius) {
    return changeNumber(celsius) + 32;
};

getFahrenheit();

function changeFahrenheit(fahrenheits) {
    return fahrenheits - 32;
}

function getCelsius(deg) {
    return changeFahrenheit(deg) * 5/9;
}
getCelsius();