import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getPostById, getPostIds } from '../../lib/post'

const Post = ({ post }) => {
  return (
    <Layout>
          <Card className='my-3 shadow mx-2'>
              <Card.Body>
                  <Card.Title>
                      {post.title}
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
    const paths = await getPostIds()
    return {
        paths,
        fallback: false // Path nào không return bởi getStaticPaths sẽ dẫn về 404
    }
}


export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        }
    }
}


export default Post