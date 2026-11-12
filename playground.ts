type Candle = { id: number; name: string; price: number };

const candles: Candle[] = [
    { id: 7, name: "Figue", price: 19.9 },
    { id: 8, name: "Vanille", price: 17.5 },
];

function findCandle(id: number): Candle | null {
    for (let i = 0; i < candles.length; i++) {
        if (candles[i].id === id) {
            return candles[i];
        }
    }
    return null;
}

// Error
// const candle: Candle | null = findCandle(9);
// console.log(candle.price); // ❌ 'candle' is possibly 'null'.

// Corrected
const candle: Candle | null = findCandle(7);

if (candle === null) {
    throw new Error("Bougie introuvable");
}

console.log(candle.price); // ✅ 19.9