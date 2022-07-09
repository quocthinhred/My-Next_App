import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/data`)
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
        const response = await axios.get(`http://localhost:4000/data/${id}`)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}