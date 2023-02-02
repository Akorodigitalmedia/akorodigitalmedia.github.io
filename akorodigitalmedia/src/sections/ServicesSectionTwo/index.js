import style from "./ServicesSectionTwo.module.css";
import CardsCarousel from "../../components/ServicesCardCarousel";
import ButtonOne from "@/components/Buttons/ButtonOne";

export default function ServicesSection() {
  return (
    <div className={style.container}>
      <h2 className={style.Title}>Our Services</h2>
      <p className={style.subtitle + " subtitle-1"}>
        We offer a range of services to cater to all your digital media design
        and development needs
      </p>
      <CardsCarousel className={style.CardsCarousel} />
    </div>
  );
}
