import { io } from "socket.io-client";
const socket = io.connect("http://192.168.1.16:8080/queue");
export default socket;
