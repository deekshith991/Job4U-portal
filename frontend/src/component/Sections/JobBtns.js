import Buttons from "./Buttons";
import { useAuth } from "../service/AuthContext";


const JobBtns = () => {
    
    const {authData} = useAuth();

    if( authData.account === "Employer"){
        return(
            <Buttons>Stats</Buttons>
        )
    }
    else{
        return(
            <div style={{display:"flex"}}>
                <Buttons>viewMore</Buttons>
                <Buttons>Apply</Buttons>
            </div>
        )
    }
}

export default JobBtns;
