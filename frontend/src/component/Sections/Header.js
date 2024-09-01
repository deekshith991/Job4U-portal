import './../css/Header.css';
import NavigationBar from './NavigationBar';


const Header = () => {

    return (
        <div className="Header">

            <div className="leftSec">
                <img src="logo192.png" alt="CompanyLogo" className="Logo"></img>
                <h1> jobs4u</h1>
            </div>

            <div className="Navigation">
                <NavigationBar />
            </div>

        </div>
    )
}
export default Header;