import React from "react";
import Users from "./users";

const UsersLayout = async ({ children }: UsersLayoutProps) => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        {/* @ts-expect-error */}
        <Users />
      </aside>
      <main>{children}</main>
    </section>
  );
};

export default UsersLayout;

interface UsersLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}
