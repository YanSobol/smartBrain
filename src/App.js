import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBD from './components/Particles/ParticlesBG';
import Facerecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';



const app = new Clarifai.App({
  apiKey: '38269a81daa64e60b6fb86964a70ee5c'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const bounding_box = data.outputs[0].data.regions[0].region_info.bounding_box;
    
    const image = document.getElementById('imageInput');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: bounding_box.left_col * width,
      topRow: bounding_box.top_row * height,
      rightCol: width - (bounding_box.right_col * width),
      bottomRow: height - (bounding_box.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box})
    console.log(this.state.box);
  };

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.calculateFaceLocation(response))
      .then(box => this.displayFaceBox(box))
      .catch(error => console.log(error));
  }

  onRouteChange = (route) => {
    if(route === 'signout') this.setState({isSignedIn: false});
    else if(route === 'home') this.setState({isSignedIn: true});
    this.setState({route});
  }

  render(){
    return (
      <div className="App">
        <ParticlesBD className='particles'/>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
        { this.state.route === 'home' 
        ?
        <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}/>
            <Facerecognition box ={this.state.box} imageUrl={this.state.imageUrl}/>
          </div>
        
        : (this.state.route === 'signin')
        ? <Signin onRouteChange = {this.onRouteChange}/>
        : <Register onRouteChange = {this.onRouteChange}/>
          
        }
      </div>
    );
  }
}

export default App;
