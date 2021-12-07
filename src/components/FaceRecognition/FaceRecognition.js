import React from "react";
import './FaceRecognition.css';

const Facerecognition = ( {box, imageUrl} ) => {

    return(
        <div className='center pa5'>
            <div className='absolute mt2'>
                <img id='imageInput' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className ='bounding-box'
                     style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                    ></div>
            </div>
        </div>
    );
}

export default  Facerecognition;

//https://objects.chopard.com/media//CollectionPages2021/JamesBond/NTTD/EN_Affiche_JamesBond.jpg
//https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088