import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-customDarkPurple text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 ">
        <p>Omm's Project Portfolio</p>
      </div>
      <div>
        <Link href="/about"> About </Link>
        <Link href="/contact"> Contact </Link>
        <Link href="/"> Homepage </Link>
      </div>
    </header>
  );
}

export default Header;
