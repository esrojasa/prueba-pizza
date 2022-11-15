import { useContext } from "react"
import Context from "../context/context"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const { menu, addToCart } = useContext(Context)
    const navigate = useNavigate()
    const viewPizza = (id) => navigate(`/pizza/${id}`)
    return (
        <section className="row">
            {menu.map((item) => {
                return (
                    <div className="col-lg-3 mt-5 d-flex justify-content-center text-capitalize" key={item.id}>
                        <div className="card" style={{ width: '25rem' }}>
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title mt-2 mb-4">{item.name}</h2>
                                <hr />
                                <h4>Ingredientes:</h4>
                                {item.ingredients.map((igt, i) => {
                                    return (
                                        <li className="text-start mx-5" key={i}>{igt}</li>
                                    )
                                })
                                }
                                <hr />
                                <h3 className="text-center m-3">${item.price}</h3>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={() => viewPizza(item.id)}>Ver más</button>
                                    <button className="btn btn-success" onClick={()=> addToCart(item)}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Menu