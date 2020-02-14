import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import useResizeObserver from './useReziseObserver'
import '../../styles/header.css'


function GeoChart({ data, property }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [selectedCountry, setSelectedCountry] = useState(null);
  
    useEffect(() => {
      const svg = select(svgRef.current);
  
      const minProp = min(data.features, feature => feature.properties[property]);
      const maxProp = max(data.features, feature => feature.properties[property]);
      const colorScale = scaleLinear()
        .domain([minProp, maxProp])
        .range(["#d4d4d6", "#203040"]);
  
      const { width, height } =
        dimensions || wrapperRef.current.getBoundingClientRect();
  
      const projection = geoMercator()
        .fitSize([width, height], data);

      const pathGenerator = geoPath().projection(projection);

      svg
        .selectAll(".country")
        .data(data.features)
        .join("path")
        .on("click", feature => {
          setSelectedCountry(feature);
        })
        .attr("class", "country")
        .transition()
        .attr("fill", feature => colorScale(feature.properties[property]))
        .attr("d", feature => pathGenerator(feature))
      svg
        .selectAll(".label")
        .data([selectedCountry])
        .join("text")
        .attr("class", "label")
        .text(
          feature =>
            feature &&
            feature.properties.name +
              ": \r"+ 
              feature.properties[property].toLocaleString() + " %"
        )
        .attr("x", width /2.5)
        .attr("y", (height/ 1.6))
        .attr("fill", "white")
        .attr("font-size", "10px")
        .insert("rect","text")
        .attr("class", "textBack") 
        .select("rect") 
      
          .attr("background-color", "white")
          .attr("x", width /2.5)
        .attr("y", (height/ 1.6))

    }, [data, dimensions, property, selectedCountry]);
  
    return (
      <div className="wrapper" ref={wrapperRef}>
        <svg ref={svgRef} viewBox={"440 210 150 190"} preserveAspectRatio="xMidYMid meet"></svg>
      </div>
    );
  }
  
  export default GeoChart;