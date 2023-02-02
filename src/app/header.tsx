import Link from "next/link";

function Header() {
  return (
    <header className="bg-stone-100 py-12">
      <nav className="center">
        <ul className="flex justify-center gap-8">
          <li className="">
            <Link
              href="/"
              className="text-sm font-medium uppercase text-gray-600"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/users"
              className="text-sm font-medium uppercase text-gray-600"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
