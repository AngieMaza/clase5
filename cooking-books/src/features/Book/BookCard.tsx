import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Book } from '../../pages/products'

interface Props {
  data: Book
}

const Book: FC<Props> = ({ data }) => {
  return (
    <div className="card border-light mb-3" style={{ width: "22rem", margin: "0 2rem" }}>
      <div className="card-body">
        <h3 className="card-title">{data.name}</h3>
        <Image src={data.image} alt="book-cover" width={200} height={300} />
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis porro, quaerat commodi</p>
        <Link href={`/products/${data.id}`} >
          <button className="btn btn-outline-success">Buy now</button>
        </Link>
      </div>
    </div>
  )
}

export default Book