import React from 'react';
import "./facerecognition.css";
const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className="center ma imageBox">
{
      (imageUrl)
      ?
    <div className="absolute mt2 imageBox">
      <div>
      <img id="inputImage" alt="link" width="500px" heigh="auto" src={imageUrl} />
      <div className="bounding_box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
      </div>
      : ""
    }
   </div>
)
}

export default FaceRecognition;
