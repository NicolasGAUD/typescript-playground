const fig = { id: 7, name: "Figue", price: 19.9 };
const vanilla = { id: 8, name: "Vanille", price: 17.5 };
class Cart {
    owner;
    items;
    constructor(owner) {
        this.owner = owner;
        this.items = [];
    }
    add(candle) {
        this.items.push(candle);
    }
    getTotal() {
        return this.items.reduce((total, candle) => total + candle.price, 0);
    }
}
const inesCart = new Cart("Inès");
const hugoCart = new Cart("Hugo");
inesCart.add(fig);
hugoCart.add(vanilla);
hugoCart.add(fig);
console.log(inesCart.getTotal()); // 19.9
console.log(hugoCart.getTotal()); // 37.4
export {};
