// Create api for crud tweets look at users as an example - ✓

import { createTweet, getTweets } from "lib/prisma/tweets";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { tweets, error } = await getTweets();
      if (error) throw new Error(error as string);
      return res.status(500).json({ tweets });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { tweet, error } = await createTweet(data);
      if (error) throw new Error(error as string);
      return res.status(200).json({ tweet });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  //TODO: Make Delete method.
  //   if (req.method === "DELETE") {
  //     try {
  //       const { id } = req.body;
  //       const { tweet, error } = await createTweet(data);
  //       if (error) throw new Error(error as string);
  //       return res.status(200).json({ tweet });
  //     } catch (error: any) {
  //       return res.status(500).json({ error: error.message });
  //     }
  //   }

  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(425).end(`Method ${req.method} is not allowed`);
};

export default handler;
