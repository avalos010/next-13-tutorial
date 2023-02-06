import { Tweet } from "@prisma/client";

function Tweet({ tweet }: { tweet: Tweet }) {
  const { body, likes } = tweet;
  return (
    <section className="m-4 py-4">
      <div className="mx-auto flex flex-col items-center justify-center">
        <p className="text-2xl">{body}</p>
        <small>{likes}</small>
      </div>
    </section>
  );
}

export default Tweet;
