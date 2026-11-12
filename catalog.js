// la réponse de l'API de Tom, depuis qu'il a renommé price en unitPrice
const body = `{ "id": 7, "name": "Figue", "scent": "figue", "size": "180 g", "price": 19.9, "stock": 12 }`;
async function fetchCandle(id) {
    const res = new Response(body); // remplace fetch(`/candles/${id}`) le temps de l'essai
    return await res.json();
}
async function showCandle() {
    const candle = await fetchCandle(7);
    console.log(`${candle.name} : ${candle.price} €`);
    console.log(candle.price.toFixed(2));
}
showCandle();
export {};
