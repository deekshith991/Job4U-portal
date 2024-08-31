import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './AuthContext';


export const ServerCheck = async () => {
    const navigate = useNavigate();
    try {

        const resp = await axios.get(`${API_URL}/api/test`);
        console.log(API_URL);
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
        const response = await axios.post(`${API_URL}/api/Auth/Login`, data);
        return response.data;
    } catch (error) {
        console.log("Error\n", error);
    }
}

export const RegisterUser = async (data) => {

    try {
        const response = await axios.post(`${API_URL}/api/Auth/Register`, data);
        return response.data;
    } catch (error) {
        console.log("Error\n", error);
    }
}