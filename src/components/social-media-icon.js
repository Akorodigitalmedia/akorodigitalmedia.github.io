import React from "react";
import {
    BrowserRouter as
    Link
} from 'react-router-dom';

function SocialMediaIcon(props){
    
    return(
        //TODO change this to react routers
            <a href={props.link_destination}>
                <div className="social-media-icon">
                    <img alt="." src={props.img_src}/>
                </div>
            </a>
    )
}

export default SocialMediaIcon
