import { NextApiRequest, NextApiResponse } from "next";
import { offers } from "../../../../data";

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    res.status(200).json(offers)
  }
  