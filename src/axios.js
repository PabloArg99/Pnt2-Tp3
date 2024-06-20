//https://axios-http.com/es/
//https://axios-http.com/es/docs/intro
//https://imaginaformacion.com/tutoriales/como-usar-axios-en-vue-3

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;

