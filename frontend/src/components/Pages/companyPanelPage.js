import IssueJob from "../Sections/IssueJob";
import HeaderSec from "../Sections/HeaderSec";
import './css/companypanel.css';
import CardDisplayer from "../Sections/CardDisplayer";

const CompanyPage = () => {
    return (
        <div className="basepage">
            <HeaderSec />
            <div className="top-section">

                <div className="left-half">
                    <CardDisplayer />
                </div>

                <div className="issue-job">
                    <IssueJob />
                </div>

            </div>

            <div className="bottom-section">
                <h1>analytics</h1>
            </div>

        </div>
    );
}

export default CompanyPage;
