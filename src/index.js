// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    let h = Math.floor(currency / 50);
    let restH = currency%50;
    let q = Math.floor(restH / 25);
    let restQ = restH%25;
    let d = Math.floor(restQ / 10);
    let restD = restQ%10;
    let n = Math.floor(restD / 5);
    let restN = restD%5;
    let p = Math.floor(restN);

    if (currency <= 0) {return {};}
    if (currency > 10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"};}
    if (h > 0) {result["H"] = h;}
    if (q > 0) {result["Q"] = q;}
    if (d > 0) {result["D"] = d;}
    if (n > 0) {result["N"] = n;}
    if (p > 0) {result["P"] = p;}
    
    return result;
};
