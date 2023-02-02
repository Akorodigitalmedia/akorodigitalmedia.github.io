import style from "./AboutCard.module.css";

export default function AboutCard({ Title, Content }) {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <h4 className={style.cardTitle}>{Title}</h4>
        <p className={style.cardDescription + " body-1"}>{Content}</p>
      </div>
    </div>
  );
}
