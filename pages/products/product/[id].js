import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Layout from '../../../components/Layout'
import { getProductById, getProductIds } from '../../../lib/product'
import Link from 'next/link'
import { useCookies } from "react-cookie"
import { useCartContext } from '../../../context/cartState'
import Modal from 'react-bootstrap/Modal';
import { Spinner } from 'react-bootstrap'
import {useRouter} from 'next/router'


const Container = styled.div`
    display: flex;
    margin: 100px auto;
    max-width: 1100px;
    gap: 100px;
`

const Image = styled.img`
    width: 40%;
`

const Price = styled.span`
    color: #ff4c3b;
    font-size: 24px;
`

const Label = styled.span`
    font-size: 18px;
    line-height: 50px;
`

const Description = styled.p`
    font-size: 14px;
    color: #666;
`

const AddToCart = styled.div`
    background: #ff4c3b;
    color: white;
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 38px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        transition: 1s;
    }
`



const Back = styled.button`
    border: none;
    background: #ff4c3b;
    border-radius: 3px;
    padding: 10px 40px;
    width: fit-content;
    margin: 50px auto;
    color: white;
    &:hover {
        opacity: 0.8;
        transition: 1s;
    }
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

const ModalIcon = styled.img`
    width: 70px;
    margin: 30px auto -30px;
`

function ProductPage({product}) {


    

    

    const cartState = useCartContext();
    
    const [cookie, setCookie] = useCookies(["listProducts"])

    let ListProducts = [];
    const [button, setButton] = useState(0);
    const [incart, setIncart] = useState(0);

    useEffect(()=>{
        if (!router.isFallback){
            if (cookie.listProducts){
                setIncart(cookie.listProducts.some((item)=>{
                    return item.id == product.id;
                }))
            }
        }
    })
    const first = useRef(1);


    useEffect(()=>{
        if (!first.current){
            if (!incart){
                handleShow();
            }
            else{
                handleShow2();
            }
        }
    }, [button])

    useEffect(()=>{
        
        if (!first.current && !incart){
            ListProducts = [];
            // ListProducts = window.localStorage.getItem("listProducts")?JSON.parse(window.localStorage.getItem("listProducts")):[];
            // ListProducts.push(productInfo);
            // window.localStorage.setItem("listProducts", JSON.stringify(ListProducts));
            ListProducts = cookie.listProducts?cookie.listProducts:[];
            ListProducts.push(productInfo);
            cartState.setListProducts(ListProducts);
            setCookie("listProducts", JSON.stringify(ListProducts), {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
            })
            setIncart(1);
            
        }
        else {
            first.current = 0;
        }
    }, [button])


    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    function handleShow() {
        setFullscreen("sm-down");
        setShow(true);
    }
    
    function handleShow2() {
        setFullscreen("sm-down");
        setShow2(true);
    }


    const router = useRouter()
    if (router.isFallback) {
        setTimeout(()=>{
            console.log("Đợi xíu!");
        }, 2000)
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

    const productInfo = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        amount: 1
    }
    
    

  return (
    <Layout>
        <Container>
            <Image src={product.image} alt='Product Image' />
            <div>
                <h2>{product.title}</h2>
                <div>
                    <Label>Price: </Label><Price>${product.price}</Price>
                </div>
                <div>
                    <Label>Description:</Label>
                    <Description>{product.description}</Description>
                </div>
                <AddToCart onClick={()=>{setButton(!button)}}>Add To Cart</AddToCart>
            </div>
        </Container>
        <Link href={`/products/${product.category}`} passHref><Back>Back To Collection</Back></Link>
        <Modal style={{marginTop: '10%'}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
            <ModalIcon src='/image/success.png' alt='success' />
            <Modal.Body className='my-5 text-center'>Add To Cart Successfully!</Modal.Body>
        </Modal>
        <Modal style={{marginTop: '10%'}} show={show2} fullscreen={fullscreen} onHide={() => setShow2(false)}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
            <ModalIcon src='/image/failed.png' alt='failed' />
            <Modal.Body className='my-5 text-center'>Product In Cart Already!</Modal.Body>
        </Modal>
    </Layout>
  )
}

export default ProductPage

export const getStaticPaths = async () => {
    const paths = await getProductIds();
    console.log(paths);
    return {
        paths,
        // fallback: false // Path nào không return bởi getStaticPaths sẽ dẫn về 404
        fallback: true // 
    }
}

export const getStaticProps = async ({params}) => {
    const product = await getProductById(params.id)
    
    return {
        props: {
            product
        },
        revalidate: 1
    }
}