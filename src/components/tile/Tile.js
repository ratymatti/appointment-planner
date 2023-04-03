import React from "react";

export const Tile = (props) => {

  console.log(props)

  return (
    <div className="tile-container">
      {
        Object.keys(props.data).map(key => {
          if (key === 'id') {
            return null;
          }
            return <p key={props.data.id}>{props.data[key]}</p>
        }) 
      }   
    </div>
  );
};

