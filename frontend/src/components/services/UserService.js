import axios from "axios";

// const api_url = "https://job4-u-portal.vercel.app"; // vercel live code ..
const api_url = "http://localhost:3333";

export const UserProfileUpdate = async (data) => {

    try {

        const response = await axios.post(`${api_url}/api/users/profile`, data);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("UserProfile Error")
    }
}

export const getJobs = async () => {

    try {

        const response = await axios.get(`${api_url}/api/jobs`);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("error in getJobs api func");
    }
}
