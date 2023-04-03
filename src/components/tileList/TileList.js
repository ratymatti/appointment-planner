import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {
        props.contacts.map(data => {
          return <Tile key={data.id}
                       data={data}   />                   
        })
      }
    </div>
  );
};
