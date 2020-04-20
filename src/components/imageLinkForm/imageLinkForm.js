import React from 'react';
import "./imageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3 introInfo">
      {"Enter a image link in the box below, and we will find a face on the image for you if there is any"}
     </p>
     <div className="center">
        <div className="form center pa4 br3 shadow-5">
        <input className="f4 pa2 center" placeholder="Enter an image link here!" type="text" onChange={onInputChange}/>
      <button
        className="grow f4 link ph3 pv2 dib white bg-purple"
         onClick={onButtonSubmit} >
         Detect
       </button>
      </div>
     </div>
  </div>);
}

export default ImageLinkForm;
