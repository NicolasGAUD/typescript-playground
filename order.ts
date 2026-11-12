type Candle = { id: number; name: string; price: number };
type Line = {item: Candle, quantity: number};

interface Describable {
    describe(): string;
}

const fig: Candle = { id: 7, name: "Figue", price: 19.9 };
const vanilla: Candle = { id: 8, name: "Vanille", price: 17.5 };

class Order implements Describable {

    readonly owner: string;
    private lines : Line[] = [];
    private totalqty: number = 0;

    constructor(owner: string) {
        this.owner = owner;
    }

    describe(): string {
        this.totalqty = this.lines.reduce(
            (total: number, line: Line) => total + line.quantity,
            0
        );
        return `${this.owner} - ${this.totalqty} candle(s) : ${this.getTotal()}`;
    }

    add(line: Line){
        if (line.quantity <=0){
            console.log("quantity is less than 0");
        }
        else{
            this.lines.push(line);
        }
        return this.lines;
    }

    getTotal(): number {
        return this.lines.reduce(
            (total: number, line: Line) => total + line.item.price * line.quantity,
            0
        );
    }

}


let hugoOrder = new Order("Hugo");
hugoOrder.add({item: vanilla, quantity: 0});
console.log(hugoOrder.describe());

let inesOrder = new Order("Ines");
inesOrder.add({item: fig, quantity: 2});
inesOrder.add({item: vanilla, quantity: 1});
console.log(inesOrder.describe());

hugoOrder.add({item: vanilla, quantity: 1});
console.log(hugoOrder.describe());