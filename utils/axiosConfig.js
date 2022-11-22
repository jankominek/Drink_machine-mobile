import axios from "axios";

export const initAxiosConfig = (ipAddress) => {
	axios.defaults.baseURL =
		`http://${ipAddress}:8080` || "http://localhost:8080";
};

export const getAxiosConfig = () => {
	return axios.defaults.baseURL;
};
