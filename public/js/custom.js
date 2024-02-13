var BTC_PRICE = 48839.30;

function handleBetAmountChange(event){
    let betAmount = event.target.value;
    if(betAmount == "") {
        betAmount = 0.0
    }

    const elementBtcShow = document.querySelector('[data-testid="conversion-amount"]');
    elementBtcShow.innerHTML = "" + (betAmount / BTC_PRICE).toFixed(8) + " BTC";
}

function handleBetAmountIncrease() {
    const elementInput = document.querySelector('[data-test="input-game-amount"]');
    let betAmount = elementInput.value;
    if(betAmount == "") {
        betAmount = 0.0
    }
    betAmount *= 2;

    elementInput.value = betAmount;
    const elementBtcShow = document.querySelector('[data-testid="conversion-amount"]');
    elementBtcShow.innerHTML = "" + (betAmount / BTC_PRICE).toFixed(8) + " BTC";
}

function handleBetAmountDecrease() {
    const elementInput = document.querySelector('[data-test="input-game-amount"]');
    let betAmount = elementInput.value;
    if(betAmount == "") {
        betAmount = 0.0
    }
    betAmount /= 2;

    elementInput.value = betAmount;
    const elementBtcShow = document.querySelector('[data-testid="conversion-amount"]');
    elementBtcShow.innerHTML = "" + (betAmount / BTC_PRICE).toFixed(8) + " BTC";
}