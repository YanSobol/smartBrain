import React from "react";

const Facerecognition = ( {imageUrl} ) => {

    return(
        <div className='center pa5'>
            <div className='absolute mt2'>
                <img alt='' src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    );
}

export default  Facerecognition;

//https://objects.chopard.com/media//CollectionPages2021/JamesBond/NTTD/EN_Affiche_JamesBond.jpg