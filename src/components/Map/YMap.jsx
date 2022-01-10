import React, { useEffect, useRef } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [56.840262, 60.677721],
  zoom: 15,
};

const coordinate = [56.840262, 60.677721];

const YMap = () => {
  return (
    <YMaps>
      <div className="y-map">
        <Map defaultState={mapData} width={"100%"} height={"500px"}>
          <Placemark
            geometry={coordinate}
            properties={{
              // preset: 'islands#icon',
              // iconColor: "#0095b6",
              iconCaption: "ул. Высоцкого, д. 10",
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};

export default YMap;
