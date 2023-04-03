import React from "react";

export const Tile = (props) => {

  return (
    <div className="tile-container">
      {
        Object.keys(props.data).map((key, index) => {
          if (key === 'id') {
            return null;
          }
            return <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{props.data[key]}</p>
        }) 
      }   
    </div>
  );
};

