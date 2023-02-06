import { getTweets } from "lib/prisma/tweets";

export default async function Tweets() {
  const { tweets } = await getTweets();
  console.log(tweets);
  return (
    <section>
      {tweets?.map(({ body, likes, id }) => (
        <div key={id}>
          <p>{body}</p>
          <small>{likes}</small>
        </div>
      ))}
    </section>
  );
}
