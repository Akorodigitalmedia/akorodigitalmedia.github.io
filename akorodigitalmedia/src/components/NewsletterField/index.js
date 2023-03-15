import Image from "next/image";
export default function NewsletterField(){
    return(
        <div className={style.container}>
            <input type="text" placeholder="Your Email..."/>
            <div className={style.btn}>
                <Image source=""/>
            </div>
        </div>
    )
}