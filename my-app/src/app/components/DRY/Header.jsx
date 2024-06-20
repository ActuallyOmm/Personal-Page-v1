import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-black text-white ">
      <div className=" mx-auto flex flex-col items-center justify-between space-y-4 font-bold">
        <p>Omm's Project Portfolio</p>
      </div>

      <div className=" col-auto flex justify-evenly">
        <Link href="/"> Homepage </Link>
        <Link href="/about"> About </Link>
        <Link href="/contact"> Contact </Link>
      </div>
    </header>
  );
}

export default Header;
