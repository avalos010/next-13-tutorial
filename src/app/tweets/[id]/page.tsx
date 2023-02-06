import { getTweetById, getTweets } from "lib/prisma/tweets";
import Tweet from "./tweet";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Tweet as TweetType } from "@prisma/client";

export async function generateStaticParams() {
  const { tweets } = await getTweets();

  return tweets?.map((tweet) => ({ id: tweet.id }));
}

async function Page({ params }: { params: Params }) {
  const { tweet } = await getTweetById(params.userId);
  return <Tweet tweet={tweet as TweetType} />;
}

export default Page;
