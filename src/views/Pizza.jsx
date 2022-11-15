import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import Context from "../context/context"

const Pizza = () => {
    const { id } = useParams()
    const { menu, addToCart } = useContext(Context)
    const [pizza, setPizza] = useState({})
    useEffect(() => {
        const pizza = menu.filter((item) => item.id === id)
        setPizza(pizza[0])
    }, [])

    return (
        <div className="col-lg-12 mt-5 pt-5">
            {Object.entries(pizza).length > 0 &&
                <div className="col-12 d-flex justify-content-center">
                    <div className="col-3">
                        <img className="border rounded" src={pizza.img} alt="pizza" style={{ width: '30rem', height: '25rem' }} />
                    </div>
                    <div className="col-4 mx-5">
                        <h2 className="text-capitalize">{pizza.name}</h2>
                        <hr />
                        <p>{pizza.desc}</p>
                        <h4>ingredients:</h4>
                        {pizza.ingredients.map((igt, i) => {
                            return (
                                <li className="text-start mx-5 text-capitalize" key={i}>{igt}</li>
                            )
                        })
                        }
                        <div className="d-flex justify-content-between mt-5">
                            <h3>Precio: ${pizza.price}</h3>
                            <button className="btn btn-danger" onClick={() => addToCart(pizza)}>Añadir</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Pizza