import Link from 'next/link'
import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getPostById, getPostIds } from '../../lib/post'
import {useRouter} from 'next/router'

const Post = ({ post }) => {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <Layout>
                <div className='text-center mt-5'>
                    <Spinner animation='border' role='status' variant='dark'>
                    </Spinner>
                    <span className='sr-only'>LOADING . . .</span>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
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

export const getStaticPaths = async () => {
    const paths = await getPostIds();
    return {
        paths,
        // fallback: false // Path nào không return bởi getStaticPaths sẽ dẫn về 404
        fallback: true // 
    }
}


export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        },
        revalidate: 5
    }
}


export default Post