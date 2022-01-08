import React from "react";

const Basket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingCharges = itemsPrice > 2000 ? 0 : 15;
    const totalPrice = itemsPrice + taxPrice + shippingCharges;

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button
                                className="remove"
                                onClick={() => onRemove(item)}
                            >
                                {" "}
                                -{" "}
                            </button>{" "}
                            <button className="add" onClick={() => onAdd(item)}>
                                {" "}
                                +{" "}
                            </button>{" "}
                        </div>

                        <div className="col-2 text-right">
                            {item.qty}x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">
                                ${itemsPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">
                                ${taxPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Charges</div>
                            <div className="col-1 text-right">
                                ${shippingCharges.toFixed(2)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <strong>Total Amount</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert("Implement Checkout")}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
};

export default Basket;
