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
                <SocialMediaIcon img_src="././assets/behance.svg" link_destination="http://www.behance.com"/>
                <SocialMediaIcon img_src="././assets/facebook.svg" link_destination="http://facebook.com"/>
                <SocialMediaIcon img_src="././assets/instagram.svg" link_destination="http://instagram.com"/>
                <SocialMediaIcon img_src="././assets/likedin.svg" link_destination="http://linkedin.com.com"/>
                <SocialMediaIcon img_src="././assets/youtube.svg" link_destination="http://youtube.com"/>
            </div>
            <InteractiveLogo/>
            <TypeWritterText className="type-writter-text-container"/>

        </div>
    }
}

export default loadingPage;