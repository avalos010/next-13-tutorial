import { Tweet } from "@prisma/client";
import prisma from ".";

export async function getTweets() {
  try {
    const tweets = await prisma.tweet.findMany();
    return { tweets };
  } catch (error) {
    return { error };
  }
}

export async function createTweet(tweet: Tweet) {
  console.log(tweet);
  try {
    const tweetFromDB = await prisma.tweet.create({ data: tweet });
    return { tweet: tweetFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getTweetById(id: string) {
  try {
    const tweet = await prisma.tweet.findUnique({ where: { id } });
    return { tweet };
  } catch (error) {
    return { error };
  }
}
