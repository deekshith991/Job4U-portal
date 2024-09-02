import axios from "axios";
import { API_URL } from "./AuthContext";

export const UserProfileUpdate = async (data) => {

    try {

        const response = await axios.post(`${API_URL}/api/users/profile`, data);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("UserProfile Error")
    }
}

export const getJobs = async () => {

    try {

        const response = await axios.get(`${API_URL}/api/jobs`);

        // console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("error in getJobs api func");
    }
}

export const getprofile = async(uid) => {

    try{
        const response = await axios.get(`${API_URL}/api/users/profile/${uid}`);
        console.log("response :",response);
        return response.data;
    }catch(error) {
        console.log(error)  ;
        console.log("error getting profile data");
    }
}
