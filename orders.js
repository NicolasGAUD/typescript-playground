const orders = [
    { id: 1043, status: "paid", total: 39.8, giftMessage: "Joyeux anniversaire !" },
    { id: 1044, status: "pending", total: 19.9, giftMessage: null },
];
function findOrder(id) {
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === id) {
            return orders[i];
        }
    }
    return null;
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
function createOrder(newOrder) {
    const created = { id: 1045, ...newOrder };
    orders.push(created);
    return created;
}
function updateOrder(order, changes) {
    return { ...order, ...changes };
}
const order = findOrder(idFromUrl("1044"));
if (order !== null) {
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
