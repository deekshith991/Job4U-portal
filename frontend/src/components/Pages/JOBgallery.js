import CardDisplayer from "../Sections/CardDisplayer";
import HeaderSec from "../Sections/HeaderSec";
import './css/jobgallery.css'


const JOBgallery = () => {

    return (
        <div>
            <div>
                <HeaderSec />
            </div>
            <div className="baseView">
                <CardDisplayer />
            </div>
        </div>
    )
}

export default JOBgallery;