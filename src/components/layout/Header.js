import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-4/5 mx-auto pt-4">
      <Link
        className="text-colorLogo text-2xl font-bold flex flex-col items-center"
        href={"/"}
      >
        Eclectic Eats <span className="text-lg">Emporium</span>
      </Link>
      <nav className="text-colorSNav flex items-center gap-10 text-lg font-semibold">
        <Link className="hover:text-linkHover" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-linkHover" href={""}>
          Menu
        </Link>
        <Link className="hover:text-linkHover" href={""}>
          Contact
        </Link>
        <Link className="hover:text-linkHover" href={""}>
          About Us
        </Link>
      </nav>
      <div className="flex gap-8">
        <Link
          className="hover:text-colorSNav hover:bg-white hover:border-2 hover:border-colorSNav bg-colorSNav text-white px-4 py-2 rounded-full border-2 border-colorSNav"
          href={"/signUp"}
        >
          SIGN UP
        </Link>
        <Link
          className="hover:text-white hover:bg-colorSNav bg-white text-colorSNav px-4 py-2 rounded-full border-2 border-colorSNav"
          href={"/login"}
        >
          LOGIN
        </Link>
      </div>
    </header>
  );
}
