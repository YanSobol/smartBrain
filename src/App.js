import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBD from './components/Particles/ParticlesBG';
import Facerecognition from './components/FaceRecognition/FaceRecognition';



const app = new Clarifai.App({
  apiKey: '38269a81daa64e60b6fb86964a70ee5c'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    console.log('click')
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
                       this.state.input)
                       .then(
                         function(response){
                            const data = response.outputs[0].data.regions[0].region_info.bounding_box;
                            // const  { bt_row, lft_col, rght_col, tp_row } = response.outputs[0].data.regions[0].region_info.bounding_box;
                            // console.log(bt_row);
                            // console.log(lft_col);
                            // console.log(rght_col);
                            // console.log(tp_row);
                            console.log(data);


                         },
                         function(error){
                            console.log(error);
                         }
                       );
  }

  render(){
    return (
      <div className="App">
        <ParticlesBD className='particles'/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
        <Facerecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
