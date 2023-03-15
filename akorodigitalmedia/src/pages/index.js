import Header from "@/sections/Header";
import HeroSectionOne from "@/sections/HeroSectionOne";
import style from "../styles/MainPage.module.css";
import ServicesSectionTwo from "@/sections/ServicesSectionTwo";
import AboutSectionThree from "@/sections/AboutUsSectionThree";
import NewsletterSectionFour from "@/sections/NewsletterSectionFour";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <HeroSectionOne
        Title="Helping you conquer the digital landscape one pixel at a time"
        Description="Find out today how Digital Media can transform how people see
      your brand."
      />
      <ServicesSectionTwo />
      <AboutSectionThree />
      <NewsletterSectionFour />
    </div>
  );
}
