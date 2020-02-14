import React, { useEffect, useState } from "react";
import ToggleSlider from '../ToggleSlider'
import BarChartContainer from './BarNutzungsGründe'
import '../../styles/charts.css'


export default function Nutzungsgründe() {

    const [data, setData] = useState([]);
    const [property, setProperty] = useState("SocialMedia");
    const [year, setYear] = useState("2006");

    useEffect(() => {
        fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/dataviztest-bbcvc/service/viz/incoming_webhook/NG")
          .then(response => response.ok && response.json())
          .then(datazugang => {
            setData(
              datazugang.sort((a, b) => a.geo.localeCompare(b.geo))
            );
          })
          .catch(console.error);
      }, [year]);

    return (
        <div className="chart3">
            <div className="NutzungHeadLine">
                <div className="NutzungHead">
                    <h1>Nutzungsgründe</h1>
                </div>
                <div className="NutzungsText">
                    <p>
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum.   
                    </p>
                </div>
            </div>
            <div className="ChartBodyWrap">
                <div className="ChartBodyNutzung">
                    <BarChartContainer property={property} data={data} year={year}/>
                </div>
                <div className="ChartBodyIcons">
                    <div className="IconWrap">
                    <button onClick={() => setProperty("SocialMedia") } type="submit" class="iconButton">
                        <i class="fas fa-user fa-border"></i>
                        <div class="IconText">SocialMedia</div>
                        </button>
                    </div>

                    <div className="IconWrap">
                    <button onClick={() => setProperty("EMail") } type="submit" class="iconButton">
                        <i class="fas fa-envelope fa-border"></i>
                        <div class="IconText">E-Mail</div>
                    </button>
                    </div>

                    <div className="IconWrap">
                    <button onClick={() => setProperty("Banking") } type="submit" class="iconButton">
                        <i class="fas fa-money-bill-wave fa-border"></i>
                        <div class="IconText">Banking</div>
                        </button>
                    </div>

                    <div className="IconWrap">
                    <button onClick={() => setProperty("Services") } type="submit" class="iconButton">
                        <i class="fas fa-dolly fa-border"></i>
                        <div class="IconText">Services</div>
                        </button>
                    </div>

                    <div className="IconWrap">
                    <button onClick={() => setProperty("Gesundheit") } type="submit" class="iconButton">
                        <i class="fas fa-heartbeat fa-border"></i>
                        <div class="IconText">Gesundheit</div>
                        </button>
                    </div>

                    <div className="IconWrap">
                    <button  type="submit" class="iconButton">
                        <i class="fas fa-music fa-border"></i>
                        <div class="IconText">Medien</div>
                        </button>
                    </div>
                </div>
               
            </div>

            <ToggleSlider textLinks={2006} textRechts={2018} handleToggle={() => setYear("2018")} ></ToggleSlider>

        </div>    
    );
}