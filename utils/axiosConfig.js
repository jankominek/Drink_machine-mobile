import axios from "axios";

export const initAxiosConfig = () => {
	axios.defaults.baseURL = "http://192.168.1.16:8080";
};
