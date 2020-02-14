import React, { useEffect, useState } from "react";
import ToggleSlider from '../ToggleSlider'
import LineChartContainer from './LineChart'
import '../../styles/charts.css'


export default function Zugangsdichte() {

  const [colorline, setColor] = useState("#2671bb");
  const [data, setData] = useState([]);
  const [property, setProperty] = useState("Europäische Union");
  const [change, setChange] = useState("ZD");


  const handleAlle = () => {
    setChange("ZD");
    setColor("#2671bb");
  }  
  const handleBB = () => {
    setChange("ZD-BB");
    setColor("#da26da");
  }
  const handleKI = () => {
    setChange("ZD-kI");
    setColor("#6811d4");
  }


  useEffect(() => {
    fetch(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/dataviztest-bbcvc/service/viz/incoming_webhook/${change}`)
      .then(response => response.ok && response.json())
      .then(datazugang => {
        setData(datazugang);
      })
      .catch(console.error);
  }, [change, colorline]);

    return (
        <div className="chart1">
        <div className="Zugangsdichte">     
        </div>
        
        <React.Fragment>
        <div className="elementsWrap">
        <div className="buttonWrap">
                    
                  <button className="btn-default" onClick={handleAlle} >alle</button>
                    <button className="btn-primary" onClick={handleBB}>Breitband</button>
                    <button className="btn-secondary" onClick={handleKI}>keine</button>
                    
                </div>
      <select value={property} onChange={e => setProperty(e.target.value)}>
        {data.map(dataZugang => (
          <option key={dataZugang.geo}>{dataZugang.geo}</option>
        ))}
      </select>
                </div>      
        <LineChartContainer property={property} data={data} colorline={colorline} />  
        </React.Fragment>
       <ToggleSlider textLinks={"Haushalte"} textRechts={"Unternehmen"}></ToggleSlider>
            
        
        <div className="infobox">
        <p className="box1">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo
                     dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        
        <div className="numberBox"><p className="number">87%</p>
                    <p className="numberText2">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est. </p>
                    </div>

        <div className="numberBox"><p className="number">75%</p>
                    <p className="numberText2">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. </p></div>
         <p className="box1">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
        </div>
    );

}