import '../css/HomePage.css';
import Footer from "../Sections/Footer";
import Header from "../Sections/Header"
import HomeView from '../Sections/HomeView';


const HomePage = () => {

    return (

        <div className="HomePage">
            <div><Header /></div>

            <div className="ContentView">
                <HomeView />
            </div>

            <div><Footer /></div>

        </div>
    )
}

export default HomePage;
