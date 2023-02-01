import style from "./ServicesSectionTwo.module.css";
import Card from "../../components/ServicesCards";
import Image from "next/image";

//Card Icons
import Modelling from "../../../public/assets/3d-modelling-icon.png";
import Animation from "../../../public/assets/animation-icon.png";
import BrandDesign from "../../../public/assets/brand-design-icon.png";
import Illustration from "../../../public/assets/illustration-icon.png";
import Photography from "../../../public/assets/photography-icon.png";
import PrintDesign from "../../../public/assets/print-design-icon.png";
import WebDesign from "../../../public/assets/web-design-icon.png";
import WebDevelopment from "../../../public/assets/web-development-icon.png";

export default function ServicesSection() {
  return (
    <div className={style.container}>
      <h2 className={style.Title}>Our Services</h2>
      <p className={style.subtitle + " subtitle-1"}>
        We offer a range of services to cater to all your digital media design
        and development needs
      </p>
    </div>
  );
}
