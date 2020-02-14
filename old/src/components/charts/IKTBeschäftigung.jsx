import React, { useEffect, useState } from "react";
import AreaChartContainer from './AreaIKTBeschäftigung'
import '../../styles/charts.css'


export default function Nutzungsgründe() {
  
    const [data, setData] = useState([]);
    const [property, setProperty] = useState("Europäische Union");
    useEffect(() => {
        fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/dataviztest-bbcvc/service/viz/incoming_webhook/IKTGen")
         .then(response => response.ok && response.json())
         .then(dataResp => {
           setData(
              dataResp
              //.sort((a, b) => a.time.localeCompare(b.time))
            );
          })
          .catch(console.error);
      }, []);


    return (
            <div className="chart4">
                <div className="IKTWrapping">
                        <div className="IKTHeadLine">
                            <div className="IKTgHead">
                                <h1>IKT Beschäftigung</h1>
                            </div>
                            <div className="IKTText">
                                <p>
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum.   
                                </p>
                            </div>
                        </div>
                        <select value={property} onChange={e => setProperty(e.target.value)}>
                            {data.map(dataZugang => (
                            <option key={dataZugang.geo}>{dataZugang.geo}</option>
                            ))}
                        </select>
                        </div>
                        <div className="ChartIKTWrap">
                            <div className="ChartIKT">
                            <AreaChartContainer property={property} data={data}></AreaChartContainer>
                            </div>
                        <div className="ChartIKTCards">
                            <button className="Cards">
                                <p className="headIKT">IKT-Beschäftigung</p>
                                <div className="DataWrap">
                                    <div className="dataRecordM">Männer</div>
                                    <div className="dataRecordF">Frauen</div>
                                </div>
                                <p className="CardText">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                                </p>
                            </button>
                            <button className="Cards">
                                <p className="headIKT">IKT-Beschäftigung</p>
                                <div className="DataWrap">
                                    <div className="dataRecordBesch">beschäftigt</div>
                                    <div className="dataRecordRek">rekrutiert</div>
                                    <div className="dataRecordBes">nicht besetzt</div>
                                </div>
                                <p className="CardText">
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                                </p>
                            </button>
                            <div></div>
                        </div>
                        </div>
            </div>

    );
}