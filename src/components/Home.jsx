import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
    return(
        <main className="home">
            {/* DESDE EL COMPONENTE HOME SE MOSTRARÁN LOS COMPONENTES HEADER Y CARDPIZZA */}
            <Header />
            <CardPizza />
        </main>
    )
}

export default Home