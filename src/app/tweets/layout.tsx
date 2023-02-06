import Tweets from "./tweets";

const TweetsLayout = async ({ children }: TweetsLayoutProps) => {
  return (
    <section className="">
      {children}
      {/* @ts-expect-error */}
      <Tweets />
    </section>
  );
};

export default TweetsLayout;

interface TweetsLayoutProps {
  children?: React.ReactNode;
}
