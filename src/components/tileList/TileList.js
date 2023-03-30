import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {
        props.contacts.map(element => {
          return <Tile key={element.id}
                       element={element}   />                   
        })
      }
    </div>
  );
};
