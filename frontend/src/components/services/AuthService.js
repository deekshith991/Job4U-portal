import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const api_url = "https://job4-u-portal.vercel.app"; // vercel live code ..

export const ServerCheck = async () => {
    const navigate = useNavigate();

    try {

        const resp = await axios.get(`${api_url}/api/test`);
        if (resp.data.status === "Online") {
            console.log("Server Online")
        }

    } catch (error) {
        console.log("Server offline Error\n", error);
        navigate('/Error');
    }
}

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