import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../../../models/Article";
import { connectToDatabase } from "../util/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db }= await connectToDatabase();

  const {
    query: { _id },
  } = req

  if (req.method == 'GET'){
      const article = await db
        .collection<Article>("posts")
        .findOne(new ObjectId(_id.toString()))
    if(article){
    return res.json(article);
    } else {
      return res.status(400).json("not found")
    }

  }
  res.status(500).json("error");

}