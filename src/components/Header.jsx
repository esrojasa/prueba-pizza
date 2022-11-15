const Header = () => {

    return (
        <header className="text-white row text-center align-items-center" style={{
            background: "url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
            height: '45vh',
            backgroundPosition: 'center'
        }}>
            <div>
                <h1 className="display-1"><strong> ¡Pizzería Mamma Mia! </strong></h1>
                <p className="display-6"><strong>Tenemos las mejores pizzas que podrás encontrar</strong></p>
            </div>

        </header>
    )
}

export default Header