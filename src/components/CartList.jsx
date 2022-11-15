import { Link } from "react-router-dom"

const CartList = ({ cart, addToCart, removeFromCart, cartTotal }) => {
    return (
        <div className="mt-5">
            <ul className="p-0 row justify-content-center">
                {
                    cart.map((item) => {
                        return (
                            <div key={item.id} className="d-flex col-lg-10 justify-content-between align-items-center mt-2">
                                <div className="col-lg-3">
                                    <div className="d-flex align-items-center">
                                        <img src={item.img} alt={item.name} style={{ width: '5rem', height: '5rem' }} />
                                        <h4 className="text-capitalize mx-2">{item.name}</h4>

                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h4 className="mx-2">${item.price * item.count}</h4>
                                    <button className="btn btn-danger mx-2" onClick={() => removeFromCart(item)}>-</button>
                                    <p className="mx-2 m-0">{item.count}</p>
                                    <button className="btn btn-success mx-2" onClick={() => addToCart(item)}>+</button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="d-flex justify-content-center">
                    <hr className="col-lg-10" />
                </div>
                <div className="col-lg-10 d-flex justify-content-end">
                    <h3 className="mx-5">Total: ${cartTotal()}</h3>
                    <Link to="/pagar" className="btn btn-primary">Ir a Pagar</Link>
                </div>
            </ul>
        </div>
    )
}
export default CartList