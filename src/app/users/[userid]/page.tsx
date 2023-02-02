import { getUserById } from "lib/prisma/users";
import User from "./user";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { User as UserType } from "@prisma/client";

async function Page({ params }: { params: Params }) {
  const { user } = await getUserById(params.userid);
  return <User user={user as UserType} />;
}

export default Page;
