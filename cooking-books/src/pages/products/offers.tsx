import { GetStaticProps } from 'next'
import { useState } from 'react';
import { Book } from '.'
import BookCard from '../../features/Book/BookCard'

const API = "http://localhost:3000/api/products/offers"
interface Props {
  data: Book[];
}
const Offers = ({data}:Props) => {
  return (
    <div>
      { data?.map( b => {
          return(
            <div key={b.name}>
            <BookCard data={b}/>
          </div>
          )
        })}
    </div>
  )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(API)
  const book: Book = await res.json()
  return {
      props: {
          data: book
      }
  }
}
export default Offers