import axios from 'axios';

const api_url = 'http://localhost:3333';


export const LoginUser = async (data) => {

    try {
        const response = await axios.post(`${api_url}/api/Auth/Login`, data);
        return response.data;
    } catch (error) {
        console.log("Error\n", error);
    }
}

export const RegisterUser = async (data) => {

    try {
        const response = await axios.post(`${api_url}/api/Auth/Register`, data);
        return response.data;
    } catch (error) {
        console.log("Error\n", error);
    }
}