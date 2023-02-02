import { getUserById } from "lib/prisma/users";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function Page({ params }: { params: Params }) {
  const { user } = await getUserById(params.userId);
  return <User user={user} />;
}

export default Page;
