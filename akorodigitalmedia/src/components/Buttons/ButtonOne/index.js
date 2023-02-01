import style from "./ButtonOne.module.css";
import Link from "next/link";
export default function ButtonOne({ Content }) {
  return (
    <div className={style.btnContainer}>
      <Link className="btn-txt" href="/">
        {Content}
      </Link>
    </div>
  );
}
