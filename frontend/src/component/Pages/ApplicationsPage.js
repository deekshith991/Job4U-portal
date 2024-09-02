import '../css/HomePage.css';
import Header from '../Sections/Header';
import Footer from '../Sections/Footer';
import UserProfile from '../Sections/UserProfile';

const ApplicationsPage = () => {

    return (
        <div className="ApplicationsPage">
            <div><Header /></div>

            <div className='contentView'>
                <h1> my dash Board</h1>
                <div><UserProfile/></div>
            </div>

            <div><Footer/></div>
        </div>
    )
}

export default ApplicationsPage;
