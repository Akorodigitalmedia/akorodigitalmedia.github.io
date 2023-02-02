import style from "./AboutSectionThree.module.css";
import AboutCard from "@/components/AboutCard";
export default function AboutSectionThree() {
  return (
    <div className={style.container}>
      <h2 className={style.Title}>About Us</h2>
      <p className={"subtitle-1 " + style.subtitle}>
        Helping you conquer the digital landscape, one pixel at a<br /> time.
      </p>
    </div>
  );
}
