import '../css/HomePage.css';
import Footer from "../Sections/Footer";
import Header from "../Sections/Header"
import JobLists from '../Sections/JobLists';


const JobsPage = () => {

    return (

        <div className="JobsPage">
            <div><Header /></div>

            <div className="ContentView">
                <div><JobLists /></div>
            </div>

            <div><Footer /></div>

        </div>
    )
}

export default JobsPage;