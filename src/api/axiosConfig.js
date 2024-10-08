import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        // Add any other headers you need
        'ngrok-skip-browser-warning': 'true' // Example header, remove if not needed
    }
});

export default instance;