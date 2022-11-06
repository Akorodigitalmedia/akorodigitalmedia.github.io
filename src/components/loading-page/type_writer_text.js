import React, { useState } from "react";
import "./loading-page.css";
import Typewriter from "typewriter-effect"

function TypeWritterText(){
    return(
        <div className="type-writter-text-container">
            <h5 className="typewritter-txt">
                <Typewriter loop="true"
                options={{
                    autoStart:true,
                    loop: true
                }}
                onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("We are under construction, sorry.")
       .pauseFor(1000)
       .deleteChars(30)
       .typeString("do design, web design/development")
       .pauseFor(1000)
       .deleteChars(33)
       .typeString("do branding, and so much more!")
       .pauseFor(1000)
       .deleteChars(30)
       .typeString("can make your website!")
       .pauseFor(1000)
       .deleteChars(18)
       .typeString("design your branding!")
       .pauseFor(1000)
       .deleteChars(21)
       .typeString("manage your social media!")
       .pauseFor(1000)
       .deleteChars(25)
       .typeString("write your copy!")
       .pauseFor(1000)
       .deleteChars(16)
       .typeString("design your digital ads!")
       .start();
       }}
                />
            </h5>
        </div>
    )
}

export default TypeWritterText