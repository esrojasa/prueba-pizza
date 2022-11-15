import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Pizza from './views/Pizza'
import Cart from './views/Cart'
import Footer from './components/Footer'

function App() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
    const updateCart = [...cart]

    if (itemIndex === -1) {
      const pizza = {
        id: item.id,
        count: 1,
        img: item.img,
        name: item.name,
        price: item.price
      }
      updateCart.push(pizza)
    } else {
      updateCart[itemIndex].count += 1
    }
    setCart(updateCart)
  }
  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((pizza) => pizza.id === item.id)
    const updateCart = [...cart]
    updateCart[itemIndex].count -= 1
    if (updateCart[itemIndex].count <= 0) {
      updateCart.splice(itemIndex, 1)
    }
    setCart(updateCart)
  }
  const cartTotal = () => {
    let total = 0
    cart.forEach((item) => total += item.count * item.price)
    return total
  }
  useEffect(() => {
    fetch('/pizzas.json')
      .then((res) => res.json())
      .then((json) => setMenu(json))
      .catch((e) => console.log(e))
  }, [])

  const globalState = { menu, cart, addToCart, removeFromCart, cartTotal }
  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/pizza/:id" element={<Pizza />}></Route>
            <Route path="/carrito" element={<Cart />}>Cart</Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
