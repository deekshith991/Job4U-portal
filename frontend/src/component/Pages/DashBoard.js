
import '../css/HomePage.css';
import '../css/Dashboard.css';
import Footer from "../Sections/Footer";
import Header from "../Sections/Header"
import JobLists from '../Sections/JobLists';
import ListJob from '../Sections/ListJob';


const DashBoard = () => {

    return (

        <div className="HomePage">
            <div><Header /></div>

            <div className="ContentView">
                <div className='dashboardpage'>
                <h1 id='title'> DashBoard </h1>
                    <div className='top-section'>
                        
                        <div className='right-section'><JobLists /></div>
                        <div className='left-section'>
                            <h1>List new job post</h1>
                            <ListJob />
                        </div>
                    </div>
                <div className='botom-section'><h1>Analytics</h1></div>
                </div>
            </div>

            <div><Footer /></div>

        </div>
    )
}

export default DashBoard;
