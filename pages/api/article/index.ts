import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../util/mongodb';
import { Article } from '../../../models/Article';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db }= await connectToDatabase();

  if (req.method == 'POST'){
    const postid = await (await 
        db.collection<Article>("posts")
          .insertOne(req.body)).insertedId;
    return res.json(postid);
  }

  if (req.method == 'GET'){
      const posts = await db
        .collection<Article>("posts")
        .find({})
        // .sort({})
        // .limit(20)
        .toArray();
    return res.json(posts);

  }
  res.status(500).json("error");
};

