import style from "./AboutSectionThree.module.css";
import AboutCard from "@/components/AboutCard";
export default function AboutSectionThree() {
  return (
    <div className={style.container}>
      <h2 className={style.Title}>About Us</h2>
      <p className={"subtitle-1 " + style.subtitle}>
        Helping you conquer the digital landscape, one pixel at a<br /> time.
      </p>
      <div className={style.textContainer}>
        <p className={"body-1"}>
          At Akoro Digital Media, we don't just meet your expectations, we
          exceed them. Our team of experts is dedicated to providing
          personalized solutions that are tailored to your business's unique
          needs. We stay on the cutting-edge of design and development, so you
          can be sure that your website and digital media will be visually
          stunning and innovative.`
        </p>
        <p className={"body-1"}>
          Our comprehensive services range from branding and digital marketing
          to web design and development, so we can handle all of your digital
          media needs in one place. We'll help you establish a strong online
          presence and increase your business's visibility in the digital
          landscape.
        </p>
      </div>
    </div>
  );
}
