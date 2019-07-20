const stockPrice = [2, 1, 5, 6, 7, 8, 6, 1, 1, 2, 8];

let calMaxProfit  = () => {
    let profit = 0;
    stockPrice.map((buyingPrice, day) => {
        for (let j = day + 1; j <stockPrice.length; j++) {
            let currentProfit = stockPrice[j] - buyingPrice;
            profit = (currentProfit > profit) ? currentProfit : profit;
        }
    });
    return profit;
}

let calMaxProfitOpt  = () => {
    let profit = 0;
    let minBuyingPrice = stockPrice[0];
    let maxSellingPrice = 0;
    stockPrice.map((currentPrice, day) => {
        minBuyingPrice = (minBuyingPrice > currentPrice) ? currentPrice : minBuyingPrice;
        maxSellingPrice = (maxSellingPrice < currentPrice) ? currentPrice : maxSellingPrice;
        let currentProfit = maxSellingPrice - minBuyingPrice;
        profit = (currentProfit > profit) ? currentProfit : profit;
    });
    return profit;
}

console.log(`Max profit is ${calMaxProfitOpt()}`);