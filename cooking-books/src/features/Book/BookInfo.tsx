import Image from 'next/image'
import React, { FC } from 'react'
import { Book } from '../../pages/products'

interface Props {
  book: Book,
  handleBought: () => void
}

const BookInfo: FC<Props> = ({ book, handleBought }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{book.name}</h3>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur praesentium labore veritatis culpa sed dicta at accusantium aut dolore.
          Dignissimos voluptatem pariatur, natus inventore nisi sit
          commodi voluptate animi corporis?</p>
      </div>
      <div style={{ width: "20rem", margin: "0 2rem" }}>
        <Image src={book.image} alt="book-cover" width={200} height={300} />
      </div>
      <div className="card-body">
      </div>
      <div className="card-body">
        <button onClick={handleBought} className="btn btn-success">Order now</button>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  )
}

export default BookInfo