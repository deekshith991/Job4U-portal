import '../css/HomePage.css';
import Header from '../Sections/Header';
import Footer from '../Sections/Footer';

const ApplicationsPage = () => {

    return (
        <div className="Homepage">
            <div><Header /></div>

            <div className='contentView'>
                <h1> my dash Board</h1>
            </div>

            <div><Footer/></div>
        </div>
    )
}

export default ApplicationsPage;
