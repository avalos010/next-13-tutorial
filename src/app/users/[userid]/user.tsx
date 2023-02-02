import { User } from "@prisma/client";
import Image from "next/image";

function User({ user }: { user: User }) {
  return (
    <section className="m-4 py-4">
      <div className="mx-auto flex flex-grow flex-col items-center justify-center">
        <div className="relative  rounded-full">
          {/* <Image
            src={user?.imageUrl as string}
            alt={user?.name as string}
            width={400}
            height={400}
          /> */}
          <img
            className="rounded-full"
            src={user?.imageUrl as string}
            width={300}
            height={300}
          />
          {/** Use this to load external images for now */}
        </div>
        <h1 className="text-xl font-bold">{user?.name}</h1>
        <p className="text-sm text-stone-400">{user?.email}</p>
      </div>
    </section>
  );
}
export default User;
