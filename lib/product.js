import axios from 'axios'

export const getAllProduct = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export const getRecommendProduct = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        let products = []
        products.push(response.data[0]);
        products.push(response.data[4]);
        products.push(response.data[8]);
        products.push(response.data[14]);
        return products;
    }
    catch (error) {
        console.log(error)
    }
}

