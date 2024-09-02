import { useEffect, useState } from "react";
import { getprofile } from "../service/UserService";
import { useAuth } from '../service/AuthContext';

const UserProfile = () => {

    const [profile, setprofile] = useState('');
    const { authData } = useAuth();

    useEffect( () => {
        const fetchdata = async() => {
            try{
                const data = await getprofile(authData.uid);
                setprofile(data);
            } catch (err){
                console.log(err);
            }
        };
        fetchdata();
    } ,[]);
    return (
        <div className="profile">
    
            <div className="profiledataform">
            <p><label>Full Name : </label><input disabled value={profile.firstName + " " + profile.lastName}/></p>
            <p><label>Email : </label><input disabled value={profile.email}/></p>
            <p><label>Alternate mail: </label><input disabled value={profile.personelMail}/></p>
            <p><label>qualification : </label><input disabled value={profile.qualification}/></p>
            <p><label>specialization : </label><input disabled value={profile.specialization}/></p>
            <p><label>Percentage : </label><input disabled value={profile.percentage}/></p>
            </div>

            <div> <button disabled>Edit</button></div>
        </div>
    )
}

export default UserProfile;
