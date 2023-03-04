import { NextApiRequest, NextApiResponse } from "next"
import { data } from "../../../../data"


export default function handlerID(req: NextApiRequest, res:NextApiResponse) {
    const {query: {id}, method} = req
    const filtered = data.filter((book) => book.id === id)
    
    if(method === "DELETE"){
        const index = data.findIndex(book => book.id === id)
        data.splice(index, 1)
        res.status(200).json(filtered[0])
    }
    if (method === "GET") {
        res.status(200).json(filtered[0])
    } 
    else {
      res.status(404).json({ message: `Book with id: ${id} not found.` })
    }
  }
  