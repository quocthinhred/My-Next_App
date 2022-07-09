import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getPostById, getPostIds } from '../../lib/post'
import {useRouter} from 'next/router'

const Post = ({ post }) => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1);
        }, 1000)
        
    }, [count])

    return (
        <Layout>
            <h1 style={{margin: "30px auto", textAlign: "center"}}>{count}</h1>
            <Card className='my-3 shadow mx-2'>
                <Card.Body>
                    <Card.Title>
                        {post.id}. {post.title}
                    </Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Link href='/posts' passHref>
                        <Card.Link>Back</Card.Link>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    context.res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=5');
    await new Promise((resolve)=>{setTimeout(resolve, 3000)});
    const post = await getPostById("1");
    return {
        props: {
            post
        }
    }
}


export default Post