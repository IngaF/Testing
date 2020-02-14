import React, { useEffect, useState } from "react";
import GeoChart from './charts/GeoChart'
import data from "./charts/GeoChart.europe.geo.json"
import '../styles/header.css'

function Map() {
    const [property, setProperty] = useState("zug_allg");
    const [zugang, setZugang] = useState();

    useEffect(() => {
      fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/dataviztest-bbcvc/service/viz/incoming_webhook/webhook0")
        .then(response => response.ok && response.json())
        .then(datazugang => {
          setZugang(
            datazugang.sort((a, b) => a.time.localeCompare(b.time))
          );
        })
        .catch(console.error);
    }, []);
    return (
      <React.Fragment>
        <div className="GeoWrappping" >  
     <GeoChart data={data} property={property} />
         <select className="mapSelect"
            value={property}
            onChange={event => setProperty(event.target.value)}
        >
          <option value="zug_allg">Breitband-Zugang</option>
          <option value="mobil_nutz">Mobilnutzung</option>
          <option value="dig_kennt">digitale Kenntnisse</option>
        </select>
       
        </div> 
        
      </React.Fragment>
    );
  }
  
  export default Map;