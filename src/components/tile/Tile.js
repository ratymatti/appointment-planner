import React from "react";

export const Tile = (props) => {

  console.log(props)

  return (
    <div className="tile-container">
      {
        Object.keys(props.element).map(key => {
          if (key === 'id') {
            return null;
          }
            return <p key={props.element.id}>{props.element[key]}</p>
        }) 
      }   
    </div>
  );
};

