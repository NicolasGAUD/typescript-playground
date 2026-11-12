// recap.ts : la fiche d'une bougie de Camille, et ses types à réparer
let shopName = "Les bougies de Camille";
let candleCount = 3;
const scents = ["figue", "vanille"];
const fig = { name: "Figue", price: 19.9, isSoldOut: false };
const vanilla = { name: "Vanille", price: 17.5, isSoldOut: false };
const cedar = { name: "Cèdre", price: 21, isSoldOut: false };
function addToTotal(total, price) {
    return total + price;
}
function formatPrice(price) {
    return price.toFixed(2) + " €";
}
function showCandle(candle) {
    console.log(candle.name + " : " + formatPrice(candle.price));
}
// unknown oblige à vérifier le type avant de s'en servir
// correction IA
const rawStock = JSON.parse("12");
if (typeof rawStock === "number") {
    console.log(`Stock : ${rawStock}`); // Stock : 12
}
const quantity = JSON.parse("2");
if (typeof quantity === "number") {
    console.log(addToTotal(0, quantity * fig.price)); // 39.8
}
console.log(shopName, candleCount, scents, vanilla, cedar);
showCandle(fig);
export {};
