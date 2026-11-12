// recap.ts : la fiche d'une bougie de Camille, et ses types à réparer

type Candle = {
    name: string;
    price: number;
    isSoldOut: boolean;
};

let shopName = "Les bougies de Camille";
let candleCount: number = 3;
const scents: string[] = ["figue", "vanille"];

const fig: Candle = { name: "Figue", price: 19.9, isSoldOut: false };
const vanilla: Candle = { name: "Vanille", price: 17.5, isSoldOut: false };
const cedar: Candle = { name: "Cèdre", price: 21, isSoldOut: false  };

function addToTotal(total: number, price: number): number {
    return total + price;
}

function formatPrice(price: number): string {
    return price.toFixed(2) + " €";
}

function showCandle(candle: Candle): void {
    console.log(candle.name + " : " + formatPrice(candle.price));
}

// unknown oblige à vérifier le type avant de s'en servir
// correction IA
const rawStock: unknown = JSON.parse("12");
if (typeof rawStock === "number") {
    console.log(`Stock : ${rawStock}`);          // Stock : 12
}

const quantity: unknown = JSON.parse("2");
if (typeof quantity === "number") {
    console.log(addToTotal(0, quantity * fig.price)); // 39.8
}

console.log(shopName, candleCount, scents, vanilla, cedar);
showCandle(fig);