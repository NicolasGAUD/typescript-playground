const body: string = '{ "name": "Figue", "price": 19.9 }';
const candle = JSON.parse(body); // candle est any : survole-le dans VS Code
let value: unknown = 19.9;

if (typeof candle.price === "number") {
    console.log(candle.price.toFixed(2)); // ✅ ici, tsc sait que value est un number
}