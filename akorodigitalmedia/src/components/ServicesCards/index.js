import style from "./ServicesCards.module.css";
import Image from "next/image";

export default function CardBody(props) {
  return (
    <div className={style.CardContainer}>
      <div className={style.IconOuter}>
        <div className={style.IconInner}>
          <Image
            src={props.Icon}
            alt={props.alttext}
            style={{ height: "8.33vw", width: "auto" }}
            className={style.Icon}
          />
        </div>
      </div>
      <div className={style.CardTitle}>
        <h6>{props.Title}</h6>
      </div>
    </div>
  );
}
