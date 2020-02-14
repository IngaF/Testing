import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal, axisBottom, axisLeft, scaleTime, scaleLinear, scaleBand, min, max, event, bisector, mouse, ticks, defined} from 'd3';
import useResizeObserver from "./useReziseObserver";


function BarNutzungsGründe({ data, property, year }) {
   const svgRef = useRef();
   const wrapperRef = useRef();
   const dimensions = useResizeObserver(wrapperRef);
   const [selection, setSelection] = useState([0, 1.5]);

   useEffect(() => {

    const svg = select(svgRef.current);
     
    if(!dimensions) return;
   // var filtered = data.filter(a=> (Object.keys(a)) == property);

    console.log(year);

    const xScale = scaleLinear()
    .domain([0, 100])
   .range([0, dimensions.width]) //change
   
  
    const yScale =  scaleBand()
   .domain(data.map((value, index) => value.geo))   //todo
   .range([20, dimensions.height ])  //change
   .padding(0.1)

   const xAxis = axisBottom(xScale).ticks(4);
       svg
       .style('font-size', '10')
       .style('color', 'grey')
     .select(".x-axis")
     .call(xAxis);
    
     const yAxis = axisLeft(yScale)
           
          .tickPadding(5)
          .tickSizeOuter(0)
          .tickSizeInner(0);
          svg
            .select(".y-axis")
            .style('font-size', '10')
            .style('color', 'grey')
            .call(yAxis)
          
            svg
          .selectAll(".bar")
          .data(data)
          .join("rect")
          .attr("class", "bar")
          .attr("fill", "grey")
          .style("margin-top", "10px")
          .attr('x', xScale(0))
          .attr('y', (s) => yScale(s.geo))
          .attr('width', (s) => xScale(s[property][Object.keys(s[property])[0]]))
          .attr('height', yScale.bandwidth)
          .on("mouseenter", (value, index) => {
            svg
              .selectAll(".tooltip")
              .data([value])
              .join(enter => enter.append("text"))
              .attr("class", "tooltip")
              .text(value[property][Object.keys(value[property])[0]] + "%")
              .attr("x", xScale(value[property][Object.keys(value[property])[0]]) - 30)
              .attr("y", yScale(value.geo) + yScale.bandwidth() / 1.4)
              .attr("opacity", 1)
              .transition()
              .attr("fill", "white")
            })
            
            .on("mouseleave", () => 
              svg.select(".tooltip").remove()
              .transition()
   )

   
}, [data, dimensions, property]);
return (
 <div classname="chartWrap" ref={wrapperRef} style={{height: 650, width: 600}} >
    <svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  </div>
);
}

export default BarNutzungsGründe;