import axios from 'axios'

export const getCategories = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}