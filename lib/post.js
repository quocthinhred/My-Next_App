import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getPostIds = async () => {
    const posts = await getPosts()

    // [
    //     {
    //         params: {
    //             id: '1'
    //         }
    //     },
    //     {
    //         params: {
    //             id: '2'
    //         }
    //     },...
    // ]

    return posts.map(post => ({
        params: {
            id: `${post.id}`
        }
    }))

}
export const getSomeThing = async ()=>{
    try {
        const response = await axios.get('https://mdm-vnvc.herokuapp.com/question/QUS0');
        return response.data.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getPostById = async id => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}