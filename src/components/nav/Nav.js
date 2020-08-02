import React from "react";
import Logo from "../common/Logo";
import Link from "next/link";
import getUserState from "../../app/store/GetUser";

function Nav() {
  const { userState } = getUserState();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-900 text-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="cursor-pointer">
            <Logo size="1.9" />
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight cursor-pointer">
            deliverpix
          </a>
        </Link>
      </div>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow"></div>
        <div>
          {userState.accessToken && (
            <div className="font-semibold text-base tracking-tight cursor-pointer">
              {userState.firstName + " " + userState.lastName}
            </div>
          )}
          {!userState.accessToken && (
            <Link href="/signin">
              <a className="font-semibold text-base tracking-tight cursor-pointer">
                Sign In
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
