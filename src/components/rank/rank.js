import React from 'react';
import "./rank.css";


const Rank = ({name, entries}) => {
  return (
    <div className="rank">
        <div className=" white f3">
              {`${name} your current rank is....`}
        </div>
        <div className="white f1">
          {entries}
        </div>
   </div>
   );
}

export default Rank;
