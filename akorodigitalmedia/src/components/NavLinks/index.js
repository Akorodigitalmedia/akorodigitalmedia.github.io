import style from "./NavLinks.module.css";
import Link from "next/link";
import { useState } from "react";

export default function NavLinks({ Title }) {
  const [visibility, setVisibility] = useState(false);

  const show = () => setVisibility(true);
  const hide = () => setVisibility(false);

  return (
    <div className={style.container}>
      <Link href="/" onMouseOver={show} onMouseOut={hide}>
        <h4>{Title}</h4>
      </Link>
      <div
        className={`${style.dividerContainer} ${
          visibility ? style.show : style.hide
        }`}
      >
        <hr className={style.divider} />
        <hr className={style.divider} />
      </div>
    </div>
  );
}
