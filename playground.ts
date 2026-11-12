type Candle = { id: number; name: string; price: number };

type Cart = {
    items: Candle[];
    add(candle: Candle): void;
    getTotal(): number;
};

const cart: Cart = {
    items: [],
    add(candle: Candle): void {
        this.items.push(candle);
    },
    getTotal(): number {
        let total: number = 0;
        for (let i = 0; i < this.items.length; i++) {
            total = total + this.items[i].price;
        }
        return total;
    },
};

cart.add({ id: 7, name: "Figue", price: 19.9 });
console.log(cart.getTotal()); // 19.9