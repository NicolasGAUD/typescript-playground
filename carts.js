const fig = { id: 7, name: "Figue", price: 19.9 };
const vanilla = { id: 8, name: "Vanille", price: 17.5 };
class Cart {
    owner;
    items = [];
    constructor(owner) {
        this.owner = owner;
    }
    add(candle) {
        this.items.push(candle);
    }
    getTotal() {
        return this.items.reduce((total, candle) => total + candle.price, 0);
    }
}
const inesCart = new Cart("Inès");
inesCart.add(fig); // ✅ la porte prévue
// inesCart.items.push(fig);     // ❌ Property 'items' is private and only accessible within class 'Cart'.
// inesCart.owner = "Hugo";      // ❌ Cannot assign to 'owner' because it is a read-only property.
console.log(inesCart.getTotal());
export {};
