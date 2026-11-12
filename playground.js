const cart = {
    items: [],
    add(candle) {
        this.items.push(candle);
    },
    getTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total = total + this.items[i].price;
        }
        return total;
    },
};
cart.add({ id: 7, name: "Figue", price: 19.9 });
console.log(cart.getTotal()); // 19.9
export {};
