import HeaderSec from "../Sections/HeaderSec";
import JobCard from "../Sections/JobCard";


const JobGallery = () => {

    return (
        <div className="JobGallery">
            <HeaderSec />
            <h1 className="TITLE"> Jobs Latest</h1>

            <div className="Gallery">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />

            </div>
        </div>
    )
}

export default JobGallery;