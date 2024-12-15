/************************************************************** */
/* ************************ COMPONENTE ************************ */
/************************************************************** */
const CardPizza = ({name, price, ingredients, img}) => {
    /* INGREDIENTES, con el método join convierto un arreglo en un string*/
    // const ingredientes = ingredients.map((ingredient) => ingredient)
    const ingredientes = ingredients.join(", ")
    // console.log(ingredientes)

    return (
        /* ****** CARD ****** */
        <article className = "card">
            {/* CARD IMAGE */}
            <img src = {img} alt = {"Pizza " + name} className="card-image" />
            {/* CARD BODY */}
            <div className="card-body">
                {/* NOMBRE */}
                <h3 className="pizza-name">{"Pizza " + name}</h3>
                {/* INGREDIENTES */}
                <p className="ingredientes">
                    Ingredientes:
                    <br />
                    {/* UTF-8 EMOJI PIZZA: &#x1F355; */}
                    <span className="span-ingredientes">&#127829; {ingredientes.toString()}</span>
                </p>
                {/* PRECIO & BOTONES DE VER MÁS Y AÑADIR AL CARRO DE COMPRAS */}
                <div className="precio-botones">
                    <h2>Precio: ${price.toLocaleString('es-CL')}</h2>
                    <div className="buttons">
                        {/* VER MÁS */}
                        {/* UTF-8 EMOJI EYES: &#128064; */}
                        <button className="button-ver-mas">Ver más &#128064;</button>
                        {/* AÑADIR AL CARRO DE COMPRAS */}
                        {/* UTF-8 EMOJI SHOPPING CART: &#128722; */}
                        <button className="button-añadir-carro">Añadir &#128722;</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardPizza