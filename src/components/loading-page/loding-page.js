import React from "react";
import './loading-page.css';
import InteractiveLogo from "./interactive-logo";
import TypeWritterText from "./type_writer_text";
import SocialMediaIcon from "../social-media-icon"
import ReactDOM from 'react-dom';

class loadingPage extends React.Component{
    render(){
        return <div className="loading-page-container container">
            <div className="social-media-icons-container">
                {/* TODO add real social media icons */}
                <SocialMediaIcon img_src="././assets/behance.svg" link_destination="https://www.behance.net/AkoroDigitalMedia"/>
                <SocialMediaIcon img_src="././assets/facebook.svg" link_destination="https://www.facebook.com/akorodigitalmedia"/>
                <SocialMediaIcon img_src="././assets/instagram.svg" link_destination="http://instagram.com/akorodigitalmedia"/>
                <SocialMediaIcon img_src="././assets/likedin.svg" link_destination="https://www.linkedin.com/company/akoro-digital-media/"/>
                <SocialMediaIcon img_src="././assets/youtube.svg" link_destination="https://www.youtube.com/channel/UCzef-cWtG-A3MSoVzIXxq2Q"/>
            </div>
            <InteractiveLogo/>
            <TypeWritterText className="type-writter-text-container"/>

        </div>
    }
}

export default loadingPage;