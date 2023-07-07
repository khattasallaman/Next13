import Link from "next/link";
import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky drop-shadow-xl z-10">
      <div className="prose prose-xl m-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href={"/"}
            className="text-white/90  hover:text-white no-underline"
          >
            Khatta
          </Link>
        </h1>
        <div>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/khattasallaman"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com/khattab_salaman"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
