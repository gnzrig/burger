import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-bd86f-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;