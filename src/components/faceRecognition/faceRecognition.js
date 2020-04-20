import React from 'react';
import "./facerecognition.css";
const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className="k center ma">
    <div className="absolute mt2">
      <img  id="inputImage" alt="link" width="500px" heigh="auto" src={imageUrl} />
      <div className="bounding_box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
   </div>
)
}

export default FaceRecognition;