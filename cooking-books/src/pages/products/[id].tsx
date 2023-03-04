import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import BookInfo from '../../features/Book/BookInfo'
import { mixin } from '../../utils/utils'

type Book = { name: string, id: string, image: string }

interface Props {
    data: Book
}

const Product: FC<Props> = ({ data }) => {
    const router = useRouter()
    const handleBought = async () => {
        await fetch(`http://localhost:3000/api/products/${data.id}`, { method: 'DELETE' })
        alert("Thanks for buying!")
        router.push("/products")
    }
    return (
        <BookInfo book={data} handleBought={handleBought} />
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/products/${params?.id}`)
    const book: Book = await res.json()
    return {
        props: {
            data: book
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetch(`http://localhost:3000/api/products`).then(response => response.json());
    const offers = await fetch(`http://localhost:3000/api/products/offers`).then(response => response.json());  
    const data: Book[] = mixin(products, offers);
    
    const paths = data.map(book => {
        return { params: { id: book.id } }
    })
    return {
        paths,
        fallback: false
    }

}
export default Product