import NavigationBar from "./NavigationBar";


const HeaderSec = () => {

    return (
        <div className="HeaderSec">
            <div className="leftSec">
                <img src="logo192.png" alt="CompanyLogo" className="Logo"></img>
                <h1> jobs4u</h1>
            </div>

            <NavigationBar />
        </div>
    )
}
export default HeaderSec;