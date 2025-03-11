/*
    Stock Buy And Sell
    Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
    https://takeuforward.org/data-structure/stock-buy-and-sell/
    
        Example 1:
    Input:
     prices = [7,1,5,3,6,4]
    Output:
     5
    Explanation:
     Buy on day 2 (price = 1) and
    sell on day 5 (price = 6), profit = 6-1 = 5.
    
    Note
    : That buying on day 2 and selling on day 1
    is not allowed because you must buy before
    you sell.

*/

function maxProfit(prices) {
    let profit = 0;
    let min = prices[0];
    for(i = 1 ; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i]
        } else {
            profit = Math.max(profit, prices[i] - min)
        }
    }
    return profit
}

let array1 = [7,1,5,3,6,4]
let result = maxProfit(array1)
console.log(result)

function maxProfitBruteForce(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
}

let result2 = maxProfitBruteForce(array1)
console.log(result2)