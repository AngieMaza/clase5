import { GetServerSideProps, NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import BookCard from '../../features/Book/BookCard'
import styles from "../../styles/Products.module.css"


export type Book = { name: string, id: string, image: string }
export type Books = Book[]
interface Props {
  data: Book[];
}
const Products = ({data}:Props) => {
  const [stock, setStock] = useState<number>(5);
  /*     useEffect(() => {
      }, [])
       */
  return (
    <main>
      <div className={styles.bookGrid}>
        
        { data?.map( b => {
          return(
            <div key={b.name}>
            <p>Stock:{stock}</p>
            <BookCard data={b}/>
          </div>
          )
        })}
      </div>
      {/* //Stock
        <BookCard/>  */}
    </main>

  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products")
  const data: Books = await res.json();
  return {
    props: { data }
  }
}

export default Products