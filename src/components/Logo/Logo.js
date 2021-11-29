import React from "react";
import Tilt from 'react-parallax-tilt';
import BraiLogo from "./logo.png";

const Logo = () => {

    return(
        <Tilt className="parallax-effect-glare-scale shadow-1 pa3 ma3"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                style={{width:'150px', height:'150px'}}>
            <div className="inner-element">
                <img alt='logo' src={BraiLogo}/>
            </div>
        </Tilt>
    );
}

export default Logo;