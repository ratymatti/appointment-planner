import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  const datalist = props.contacts ? props.contacts : props.appointments;
  return (
    <div>
      {
        datalist.map(data => {
          return  <Tile
                    className="tile-container"
                    key={data.id}
                    data={data} />                   
        })
      }
    </div>
  );
};
