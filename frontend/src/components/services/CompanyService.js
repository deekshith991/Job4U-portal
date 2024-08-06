import axios from "axios";


const api_url = process.env.API_URL || 'http://localhost:3333';

export const CompanyProfileUpdate = async (data) => {

    try {

        const response = await axios.post(`${api_url}/api/companies/profile`, data);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
        console.log("CompanyProfile Error")
    }
}
