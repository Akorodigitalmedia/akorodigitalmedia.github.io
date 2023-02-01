import style from "./ServicesCardCarousel.module.css";
import Card from "../ServicesCards";
import Image from "next/image";
import { useState } from "react";

//Card Icons
import Modelling from "../../../public/assets/3d-modelling-icon.png";
import Animation from "../../../public/assets/animation-icon.png";
import BrandDesign from "../../../public/assets/brand-design-icon.png";
import Illustration from "../../../public/assets/illustration-icon.png";
import Photography from "../../../public/assets/photography-icon.png";
import PrintDesign from "../../../public/assets/print-design-icon.png";
import WebDesign from "../../../public/assets/web-design-icon.png";
import WebDevelopment from "../../../public/assets/web-development-icon.png";
//arrows
import LeftArrow from "../../../public/assets/left-arrow.png";
import RightArrow from "../../../public/assets/right-arrow.png";
export default function CardCarousel() {
  const [position, setPosition] = useState(50);
  const moveRight = () => {
    if (position > 2) {
      setPosition(position - 5);
    } else if (position < 98) {
      setPosition(5);
    }
  };

  const moveLeft = () => {
    if (position < 80) {
      setPosition(position + 5);
    } else if (position > 2) {
      setPosition(60);
    }
  };

  return (
    <div className={style.container}>
      <div onClick={moveLeft} className={style.PrevBtn + " " + style.btn}>
        <Image
          alt=""
          src={LeftArrow}
          style={{ height: "3.472vw", width: "auto" }}
        />
      </div>
      <div className={style.ContentContainer}>
        <div
          style={{ position: "relative", left: position + "%" }}
          className={style.Cards}
          alttext=""
        >
          <div className={style.Card}>
            <Card Title="Web Development" Icon={WebDevelopment} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="Web Design" Icon={WebDesign} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="Illustration" Icon={Illustration} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="Print Design" Icon={PrintDesign} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="Brand Design" Icon={BrandDesign} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="Animation" Icon={Animation} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="3D Modelling" Icon={Modelling} alttext="" />
          </div>
          <div className={style.Card}>
            <Card Title="Photography" Icon={Photography} alttext="" />
          </div>
        </div>
      </div>
      <div onClick={moveRight} className={style.NextBtn + " " + style.btn}>
        <Image
          alt=""
          src={RightArrow}
          style={{ height: "3.472vw", width: "auto" }}
        />
      </div>
    </div>
  );
}
