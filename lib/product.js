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

// [
//   { params: { collection: "men's clothing", id: '1' } },
//   { params: { collection: "men's clothing", id: '2' } },
//   { params: { collection: "men's clothing", id: '3' } },
//   { params: { collection: "men's clothing", id: '4' } },
//   { params: { collection: 'jewelery', id: '5' } },
//   { params: { collection: 'jewelery', id: '6' } },
//   { params: { collection: 'jewelery', id: '7' } },
//   { params: { collection: 'jewelery', id: '8' } },
//   { params: { collection: 'electronics', id: '9' } },
//   { params: { collection: 'electronics', id: '10' } },
//   { params: { collection: 'electronics', id: '11' } },
//   { params: { collection: 'electronics', id: '12' } },
//   { params: { collection: 'electronics', id: '13' } },
//   { params: { collection: 'electronics', id: '14' } },
//   { params: { collection: "women's clothing", id: '15' } },
//   { params: { collection: "women's clothing", id: '16' } },
//   { params: { collection: "women's clothing", id: '17' } },
//   { params: { collection: "women's clothing", id: '18' } },
//   { params: { collection: "women's clothing", id: '19' } },
//   { params: { collection: "women's clothing", id: '20' } }
// ]


export const getProductIds = async () => {
    const products = await getAllProduct()
    products.splice(7);
    return products.map(product => ({
        params: {
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
        console.log(error);
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export const getProductRecommend = async () => {
    try {
        let listProducts = await getAllProduct();
        listProducts = shuffle(listProducts);
        listProducts.splice(4);
        console.log("Hello", listProducts);
        return listProducts;
    }
    catch (error) {
        console.log(error);
    }
} 

