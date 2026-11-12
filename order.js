const fig = { id: 7, name: "Figue", price: 19.9 };
const vanilla = { id: 8, name: "Vanille", price: 17.5 };
class Order {
    owner;
    lines = [];
    totalqty = 0;
    constructor(owner) {
        this.owner = owner;
    }
    describe() {
        this.totalqty = this.lines.reduce((total, line) => total + line.quantity, 0);
        return `${this.owner} - ${this.totalqty} candle(s) : ${this.getTotal()}`;
    }
    add(line) {
        if (line.quantity <= 0) {
            console.log("quantity is less than 0");
        }
        else {
            this.lines.push(line);
        }
        return this.lines;
    }
    getTotal() {
        return this.lines.reduce((total, line) => total + line.item.price * line.quantity, 0);
    }
}
let hugoOrder = new Order("Hugo");
hugoOrder.add({ item: vanilla, quantity: 0 });
console.log(hugoOrder.describe());
let inesOrder = new Order("Ines");
inesOrder.add({ item: fig, quantity: 2 });
inesOrder.add({ item: vanilla, quantity: 1 });
console.log(inesOrder.describe());
hugoOrder.add({ item: vanilla, quantity: 1 });
console.log(hugoOrder.describe());
export {};
