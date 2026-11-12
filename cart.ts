function addToTotal(total: number, price: number) {
    return total + price;
}
console.log(addToTotal(0, 19.9)); // 19.9
function showTotal(total:number) {
    console.log(`Total : ${total} €`);
}
showTotal(addToTotal(0, 19.9)); // Total : 19.9 €
export {};