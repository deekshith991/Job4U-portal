import axios from "axios";

const api_url = "https://job4-u-portal.vercel.app"; // vercel live code ..

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
