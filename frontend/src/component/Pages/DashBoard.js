
import '../css/HomePage.css';
import Footer from "../Sections/Footer";
import Header from "../Sections/Header"
import ListJob from '../Sections/ListJob';


const DashBoard = () => {

    return (

        <div className="HomePage">
            <div><Header /></div>

            <div className="ContentView">
                <h1> DashBoard </h1>
                <div><ListJob /></div>
            </div>

            <div><Footer /></div>

        </div>
    )
}

export default DashBoard;