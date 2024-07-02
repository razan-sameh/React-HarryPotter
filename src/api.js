const API_BASE_URL = 'https://potterapi-fedeperin.vercel.app/en';

export const fetchData = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
};


