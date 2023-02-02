import { getUserById, getUsers } from "lib/prisma/users";
import User from "./user";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { User as UserType } from "@prisma/client";

export async function generateStaticParams() {
  const { users } = await getUsers();

  return users?.map((user) => ({ userId: user.id }));
}

async function Page({ params }: { params: Params }) {
  const { user } = await getUserById(params.userId);
  return <User user={user as UserType} />;
}

export default Page;
