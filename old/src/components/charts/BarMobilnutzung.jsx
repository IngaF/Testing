import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleOrdinal, scaleBand} from 'd3';
import useResizeObserver from "./useReziseObserver";


function BarMobilNutzung({ data, property, number }) {
   const svgRef = useRef();
   const wrapperRef = useRef();
   const dimensions = useResizeObserver(wrapperRef);

   useEffect(() => {

    const svg = select(svgRef.current);
     
         if(!dimensions) return;

        //Daten filtern
        var filtered = data.filter(a=>a.geo==property);

         const xScale = scaleLinear()
         .domain([0, 100])
        .range([0, dimensions.width])
        
         const yScale =  scaleBand()
        .domain(data.map((value, index) => value.age))
        .range([0, dimensions.height - 100])
        .padding(0.2)

        var color = scaleOrdinal()
        .domain(data.map((value, index) => value.age))
        .range(["#b886f7","#a078d1","#6e4d96"])

         const xAxis = axisBottom(xScale);
            svg
          .select(".x-axis")
          .remove()

          const yAxis = axisLeft(yScale)
          .tickSizeOuter(0)
          .tickSizeInner(0);
          svg
            .select(".y-axis")
            .style('font-size', '14')
            .style('color', 'grey')
            .call(yAxis);

          svg
          .selectAll(".bar")
          .data(filtered)
          .join("rect")
          .attr("class", "bar")
          .attr("fill", color)
          .style("margin-top", "10px")
          .attr('x', xScale(0))
          .attr('y', (s) => yScale(s.age))
          .attr('width', (s) => xScale(s.time[Object.keys(s.time)[number]]))
          .attr('height', yScale.bandwidth)
          .on("click", (value, index) => {
            svg
            .selectAll(".click")
            .data([value])
            .join(enter => enter.append("text"))
            .attr("class", "click")
            .text((s) => s.time[Object.keys(s.time)[0]] + "%")
            .attr("x", xScale(value.time[Object.keys(value.time)[number]]-12))
            .attr("y", yScale(value.age) + yScale.bandwidth() / 1.5)
            .attr("opacity", 1)
            .attr("font-size", "13px")
            .attr("font-weight", "bolder")
            .transition()
            .attr("fill", "#6811d4")
          })
          .on("mouseenter", (value, index) => {
            svg
              .selectAll(".tooltip")
              .data([value])
              .join(enter => enter.append("text"))
              .attr("class", "tooltip")
              .text((s) => s.time[Object.keys(s.time)[0]] + "%")
              .attr("x", xScale(value.time[Object.keys(value.time)[number]]))
              .attr("y", yScale(value.age) + yScale.bandwidth() / 1.5)
              .attr("opacity", 1)
              .attr("font-size", "16px")
              .attr("font-weight", "bold")
              .transition()
              .attr("fill", "#6811d4")
            })
            
            .on("mouseleave", () => 
              svg.select(".tooltip").remove()
              .transition()
   )
         
  }, [data, dimensions, property]);
  return (
   <div ref={wrapperRef} >
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
);
}

export default BarMobilNutzung;