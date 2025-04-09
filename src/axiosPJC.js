import axios from 'axios';

const apiPJC = axios.create({
  baseURL: 'https://abitus-api.geia.vip/v1',
  timeout: 10000, // Tempo limite para requisições (opcional)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiPJC;