type Candle = {
    id: number;
    name: string;
    price: number;
};
const fig: Candle = { id: 7, name: "Figue", price: 19.9 };
const vanilla: Candle = { id: 8, name: "Vanille", price: 17.5 };


class Cart {
    readonly owner: string;
    private items: Candle[] = [];

    constructor(owner: string) {
        this.owner = owner;
    }

    add(candle: Candle): void {
        this.items.push(candle);
    }

    getTotal(): number {
        return this.items.reduce((total: number, candle: Candle) => total + candle.price, 0);
    }
}

const inesCart: Cart = new Cart("Inès");
inesCart.add(fig);            // ✅ la porte prévue
// inesCart.items.push(fig);     // ❌ Property 'items' is private and only accessible within class 'Cart'.
// inesCart.owner = "Hugo";      // ❌ Cannot assign to 'owner' because it is a read-only property.

console.log(inesCart.getTotal());


