import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        console.log('Fetch API full POSTS')
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

export const getPostById = async id => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log('Fetch API one POST')
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}