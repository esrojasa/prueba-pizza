import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context"
const Navbar = () => {
    const { cartTotal } = useContext(Context)
    return (
        <nav className="navbar navbar-expand-lg bg-danger fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/"><strong><i class="fa-solid fa-pizza-slice"></i> Mamma Mia!</strong></Link>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/carrito"><i className="fa-solid fa-cart-shopping mx-3"></i>${cartTotal()}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar