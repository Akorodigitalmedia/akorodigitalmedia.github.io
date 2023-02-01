import style from "./HeroSectionOne.module.css";
import ButtonOne from "@/components/Buttons/ButtonOne";

export default function HeroSectionOne({ Title, Description }) {
  return (
    <div className={style.container}>
      <div className={style.containerLeft}>
        <h2 className={style.HeroTitle}>{Title}</h2>
        <h5 className={style.HeroDescription}>{Description}</h5>
        <ButtonOne Content="Contact US" />
      </div>
      <div className={style.containerRight}>
        <div className={style.frame + " " + style.frameOuter}>
          <div className={style.frame + " " + style.frameInner}></div>
        </div>
      </div>
    </div>
  );
}
