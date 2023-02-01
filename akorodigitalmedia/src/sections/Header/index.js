import NavLinks from "@/components/NavLinks";
import Image from "next/image";
import Link from "next/link";
import style from "./Header.module.css";
import logo from "../../../public/assets/logo.svg";
export default function Header() {
  return (
    <div className={style.container}>
      <Link href="/">
        <Image
          src={logo}
          style={{ width: "6.7361vw", height: "auto" }}
          alt=""
        />
      </Link>
      <NavLinks Title="About" />
      <NavLinks Title="Portfolio" />
      <NavLinks Title="Contact" />
      <NavLinks Title="Home" />
      <NavLinks Title="Services" />
      <NavLinks Title="Packages" />
    </div>
  );
}
