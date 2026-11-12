type Candle = {
    id: number;
    name: string;
    price: number;
};
const fig: Candle = { id: 7, name: "Figue", price: 19.9 };
const vanilla: Candle = { id: 8, name: "Vanille", price: 17.5 };


class Cart {
    owner: string;
    items: Candle[];

    constructor(owner: string) {
        this.owner = owner;
        this.items = [];
    }

    add(candle: Candle): void {
        this.items.push(candle);
    }

    getTotal(): number {
        return this.items.reduce((total: number, candle: Candle) => total + candle.price, 0);
    }
}

const inesCart: Cart = new Cart("Inès");
const hugoCart: Cart = new Cart("Hugo");

inesCart.add(fig);
hugoCart.add(vanilla);
hugoCart.add(fig);

console.log(inesCart.getTotal()); // 19.9
console.log(hugoCart.getTotal()); // 37.4