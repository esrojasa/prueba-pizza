import { useContext } from "react"
import CartList from "../components/CartList"
import Context from "../context/context"

const Cart = () => {
    const { cart, addToCart, removeFromCart, cartTotal } = useContext(Context)

    return (
        <main className="col-lg-12 mt-5 text-center ">
            <div className="mt-5">
                <h1 className="mt-t p-4">Detalles del Pedido</h1>
                {
                    cart.length !== 0 ?
                        <CartList
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            cartTotal={cartTotal}>
                        </CartList>
                        : <p>No hay elementos en el carrito</p>
                }
            </div>
        </main>
    )
}
export default Cart