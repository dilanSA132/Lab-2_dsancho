
import axios from 'axios';

const API_KEY = 'b8c625dee2ca4afc8bc5b3dcc9d56917';
const API_URL = 'https://newsapi.org/v2/top-headlines';
const COUNTRY_CODE = 'us'; 

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${API_URL}?country=${COUNTRY_CODE}&apiKey=${API_KEY}&pageSize=30`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
