import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const login = async (email, password) => {
    const response = await api.post('/auth/login/', { email, password });
    return response.data;
};

export const register = async (email, password) => {
    const response = await api.post('/auth/register/', { email, password }); 
    return response.data;
};

export const fetchMapData = async () => {
    const response = await api.get('/map/data');
    return response.data;
};

export const analyzeImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await api.post('/ai/analyze/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
