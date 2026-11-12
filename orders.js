const orders = [
    { id: 1043, status: "paid", total: 39.8, giftMessage: "Joyeux anniversaire !" },
    { id: 1044, status: "pending", total: 19.9, giftMessage: null },
];
// function findOrder(id: number): Order | null {
//     for (let i = 0; i < orders.length; i++) {
//         if (orders[i].id === id) {
//             return orders[i];
//         }
//     }
//     return null;
// }
// CLAUDE REFACTOR
function findOrder(id) {
    return orders.find((order) => order.id === id) ?? null;
}
function statusLabel(status) {
    if (status === "pending") {
        return "En attente";
    }
    if (status === "paid") {
        return "Payée";
    }
    if (status === "shipped") {
        return "Expédiée";
    }
    return "Annulée";
}
function idFromUrl(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    return id;
}
// function createOrder(newOrder:NewOrder) {
//     const created = {id: 1045, ...newOrder };
//     orders.push(created);
//     return created;
// }
// CLAUDE REFACTOR
function createOrder(newOrder) {
    const nextId = orders.reduce((max, order) => Math.max(max, order.id), 0) + 1;
    const created = { id: nextId, ...newOrder };
    orders.push(created);
    return created;
}
function updateOrder(order, changes) {
    return { ...order, ...changes };
}
const order = findOrder(idFromUrl("1044"));
if (order === null) {
    console.log("Commande introuvable");
}
else {
    console.log(order.total + " € : " + statusLabel(order.status));
    if (order.giftMessage !== null) {
        console.log(order.giftMessage.toUpperCase());
    }
}
const created = createOrder({ status: "pending", total: 17.5, giftMessage: null });
const paid = updateOrder(created, { status: "paid" });
paid.id = 2000;
console.log(paid.id + " : " + statusLabel(paid.status));
export {};
