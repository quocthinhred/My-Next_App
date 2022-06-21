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

export const getProductByCategory = async (category) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export const getProductIds = async () => {
    const products = await getAllProduct()
    return products.map(product => ({
        params: {
            collection: `${product.category}`,
            id: `${product.id}`
        }
    }))

}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

