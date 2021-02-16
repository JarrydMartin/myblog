import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from './util/mongodb' ;
import { Post } from '../../models/Post';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db }= await connectToDatabase();

  if (req.method == 'POST'){
    const postid = await (await 
        db.collection<Post>("posts")
          .insertOne(req.body)).insertedId;
    return res.json(postid);
  }

  if (req.method == 'GET'){
      const posts = await db
        .collection<Post>("posts")
        .find({})
        // .sort({})
        // .limit(20)
        .toArray();
    return res.json(posts);

  }
  res.status(500).json("error");
};

