import axios from "axios";
import { API_URL } from "./AuthContext";

export const CompanyProfileUpdate = async (data) => {

    try {

        const response = await axios.post(`${API_URL}/api/companies/profile`, data);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("CompanyProfile Error")
    }
}


export const PostJob = async (data) => {

    try {

        const response = await axios.post(`${API_URL}/api/companies/post`, data);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("job post Error")
    }
}
