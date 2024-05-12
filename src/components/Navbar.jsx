"use client";

import { useRouter } from "next/navigation";

const Navbar = ({ appTitle }) => {
  const router = useRouter();

  return (
    <header className="bg-white flex items-center space-x-3 p-5">
      <button type="button" onClick={() => router.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
          ></path>
        </svg>
      </button>

      <h3 className="font-semibold uppercase">{appTitle}</h3>
    </header>
  );
};

export default Navbar;
