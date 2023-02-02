import { createUser, getUsers } from "lib/prisma/users";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { users, error } = await getUsers();
      if (error) throw new Error(error as string);
      return res.status(Number(200)).json({ users });
    } catch (error: any | unknown) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log(data);
      const { user, error } = await createUser(data);
      if (error) throw new Error(error as string);
      return res.status(200).json({ user });
    } catch (error: any | unknown) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed`);
};

export default handler;
