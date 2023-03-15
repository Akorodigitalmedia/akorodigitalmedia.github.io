import style from "./AboutCardsCarousel.module.css";
import AboutCard from "../AboutCard";
import { useState } from "react";
import Image from "next/image";
//arrows
import LeftArrow from "../../../public/assets/left-arrow.png";
import RightArrow from "../../../public/assets/right-arrow.png";

export default function AboutCardsCarousel() {
  const [position, setPosition] = useState(0);
  const moveRight = () => {
    if (position > -234.5) {
      setPosition(position - 58.75);
    } else {
      setPosition(-235);
    }
  };

  const moveLeft = () => {
    if (position < 0) {
      setPosition(position + 58.75);
    } else {
      setPosition(0);
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
      <div className={style.carouselContainer}>
        <div
          className={style.CardContainer}
          style={{ position: "relative", left: position + "vw" }}
        >
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Cutting-edge design and development:"
              Content="We stay ahead of the curve in technology, ensuring that your website and digital media will be visually stunning, innovative and responsive."
            />
          </div>
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="All-in-one services:"
              Content="We offer a wide range of services including web design, website development, UI/UX design, graphic design, branding, digital marketing, SEO, e-commerce solutions, print design, photography and more."
            />
          </div>
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Increased online presence:"
              Content="We help you establish a strong online presence, increase your business's visibility and drive more traffic to your website."
            />
          </div>
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Expert team:"
              Content="Our team of experts has a deep understanding of the latest design trends, user experience, and development technologies, ensuring that your digital media will be of the highest quality."
            />
          </div>
          <div className={style.Card}>
            {" "}
            <AboutCard
              className={style.Card}
              Title="Ongoing support:"
              Content="We provide ongoing support and maintenance to ensure that your website and digital media are always running smoothly."
            />
          </div>
          <div className={style.Card}>
            {" "}
            <AboutCard
              className={style.Card}
              Title="Competitive pricing:"
              Content="Our prices are affordable and we offer a variety of pricing options to suit small businesses."
            />
          </div>
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Increased ROI:"
              Content="Our digital marketing services such as SEO, social media marketing and email marketing will help you increase your return on investment."
            />
          </div>

          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Optimized website"
              Content="Our website optimization service ensures that your website is faster, secure and mobile-friendly, resulting in increased engagement and conversion rates."
            />
          </div>
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Customer satisfaction:"
              Content="At Akoro Digital Media, we don't just meet your expectations, we exceed them. Our goal is to maintain a high customer satisfaction rate and we are committed to your success."
            />
          </div>
          <div className={style.Card}>
            <AboutCard
              className={style.Card}
              Title="Tailored solutions:"
              Content="Our team takes the time to understand your unique needs and creates personalized digital media services to help you achieve your goals."
            />
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
