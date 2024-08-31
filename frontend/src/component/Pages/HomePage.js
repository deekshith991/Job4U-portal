import '../css/HomePage.css';
import Footer from "../Sections/Footer";
import Header from "../Sections/Header"


const HomePage = () => {

    return (

        <div className="HomePage">
            <div>
                <Header />
            </div>

            <div className="HomeContent">
                <h1> home pages </h1>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;