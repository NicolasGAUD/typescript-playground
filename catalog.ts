type Candle = {
    id: number;
    name: string;
    scent: string;
    size: string;
    price: number;
    stock: number;
};

// la réponse de l'API de Tom, depuis qu'il a renommé price en unitPrice
const body = `{ "id": 7, "name": "Figue", "scent": "figue", "size": "180 g", "price": 19.9, "stock": 12 }`;

async function fetchCandle(id: number): Promise<Candle> {
    const res = new Response(body); // remplace fetch(`/candles/${id}`) le temps de l'essai
    return await res.json();
}


// Provient du cours, inapplicable ici.
// export type ApiError = {
//     error: string;
// };
//
// async function fetchCandle(id: number): Promise<Candle> {
//     const res = await fetch(`http://localhost:8080/candles/${id}`);
//     if (!res.ok) {
//         const problem: ApiError = await res.json(); // 404 : le JSON a la forme d'une erreur
//         throw new Error(problem.error);
//     }
//     return await res.json(); // 200 : le JSON a la forme d'une bougie
// }

async function showCandle() {
    const candle = await fetchCandle(7);
    console.log(`${candle.name} : ${candle.price} €`);
    console.log(candle.price.toFixed(2));
}

showCandle();