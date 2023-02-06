import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function Navigation() {
  const { data: session } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <nav className="bg-black text-white p-4 flex justify-around">
      <Link href="/">
        <div className="{logo}">Next Auth</div>
      </Link>
      <ul className="flex space-x-10">
        {!session ? (
          <li>
            <Link href="/auth">Login</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
