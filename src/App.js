import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation.js';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm.js';
import FaceRecognition from './components/faceRecognition/faceRecognition.js';
import SignIn from './components/signIn/SignIn.js';
import Register from './components/register/Register.js';
import DisplayError from './components/displayError/displayError.js';
import Rank from './components/rank/rank.js';
import Logo from './components/logo/logo.js';
import './App.css';


const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const HOST = "https://gentle-castle-38377.herokuapp.com/";

const initialState = {
  input: " ",
  imageUrl: "",
  box: {},
  isSignIn: false,
  route: "signIn",
  error: "",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

 class App extends Component {
    constructor(){
      super();
      this.state = initialState;
      }

    loadUser = (data) => {
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
    }
    onRouteChange = (route) => {
        if(route === "signOut"){
          this.setState(initialState)
        }else if (route === "home"){
          this.setState({isSignIn: true})
        }
      this.setState({route : route});
    }

    calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    }

    displayFaceBox = (box) => {
      this.setState({box : box});
      console.log(box);
    }
    onInputChange = (event) =>{
      this.setState({
        input: event.target.value
      })
    }

    onButtonSubmit = () => {
      this.setState({
        imageUrl: this.state.input
      });
       fetch(`${HOST}imageURL`, {
               method: "post",
               headers: {"content-type": "application/json"},
               body: JSON.stringify({
                 input: this.state.input
            })
         })
         .then(response => response.json())
         .then(response => {
           if(response){
             fetch(`${HOST}image`, {
                 method: "put",
                 headers: {"content-type": "application/json"},
                 body: JSON.stringify({
                   id: this.state.user.id
                 })
           })
            .then(response => response.json())
            .then(count => {
              console.log(count)
              this.setState(Object.assign(this.state.user, {entries: count}))
         })
       }
           this.displayFaceBox(this.calculateFaceLocation(response))
         })
    }


render(){
  const { isSignIn, imageUrl, route, box } = this.state;
  return (

    <div className="App">
      <Particles className="particles"
        params ={particleOptions}
      />

    <Navigation isSignIn = {isSignIn} onRouteChange = {this.onRouteChange}/>
    {
      route === "home"
        ?
          <div>
              <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={box} imageUrl ={imageUrl} />
          </div>
        :
           ( this.state.route === "signIn"
             ?
             <DisplayError title="is it working" information="Incorrect Username or password. If the problem insist try to refresh the page!">
               <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
              </DisplayError>
             :
               <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>)

  }

    </div>

  );
}
}

export default App;
