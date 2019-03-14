// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    if (currency <= 0){
        return {};
    }
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (Math.floor(currency / 50) > 0){
        result["H"] = Math.floor(currency / 50);        
    }
    if (Math.floor((currency%50) / 25) > 0){
        result["Q"] = Math.floor(currency%50 / 25);
    }
    if (Math.floor(((currency%50)%25) / 10) > 0){
        result["D"] = Math.floor(((currency%50)%25) / 10);
    }
    if (Math.floor((((currency%50)%25)%10) / 5) > 0){
        result["N"] = Math.floor((((currency%50)%25)%10) / 5);
    }
    if (Math.floor((((currency%50)%25)%10)%5) > 0){
        result["P"] = Math.floor(currency%50%25%10%5);
    }
    

    return result;
};
