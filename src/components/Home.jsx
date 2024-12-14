import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
    return(
        <section className="home">
            <h2>HOME</h2>
            {/* DESDE EL COMPONENTE HOME SE MOSTRARÁN LOS COMPONENTES HEADER Y CARDPIZZA */}
            <Header />
            <CardPizza />
        </section>
    )
}

export default Home