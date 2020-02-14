import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, scaleTime, scaleLinear, min, max, entries,bisector, mouse, curveLinear, area} from 'd3';
import useResizeObserver from "./useReziseObserver";

function AreaIKTBeschäftigung({ data, property }) {
   const svgRef = useRef();
   const wrapperRef = useRef();
   const dimensions = useResizeObserver(wrapperRef);
 
   useEffect(() => {

      const svg = select(svgRef.current);
     var filterme;
     var filterMann;
      if(!dimensions) return;

      //Daten filtern
      var filtered = data.filter(a=>a.geo==property);
      var filtered = data.filter(a=>a.geo==property);
     
    for(var i = 0; i < filtered.length; i ++) {
       var filterme = filtered[i].Frauen;
       var filterMann = filtered[i].Männer;  
    }

    var valesFrau = entries(filterme);
    var valesMann = entries(filterMann);

    var objectsIKT = {gen: valesFrau, gens: valesMann};

    const minDate = new Date (min(objectsIKT.gen, value => value.key));
    const maxDate = new Date (max(objectsIKT.gen, value => value.key));     

    console.log(minDate);
    console.log(maxDate);


      const xScale = scaleTime()
          .domain([minDate,maxDate])
         .range([0, dimensions.width])
        
      const yScale =  scaleLinear()
         .domain([0, 100])
         .range([dimensions.height, 30]);

      
      const yAxis = axisLeft(yScale);   
      svg
      .select('.y-axis')
      .style('color', 'grey')
      .style('font-size', '14')
      .call(yAxis);

      //X-Achsen-Beschriftung
      svg.append("text")
      .attr("text-anchor", "end")
      .attr("fill", "grey")
      .attr("x", dimensions.width)
       .attr("y", dimensions.height  + 50)
       .text("Jahr");

     const xAxis = axisBottom(xScale)
     svg
      .select(".x-axis")
      .style('transform', `translateY(${dimensions.height}px)`)
      .style('color', 'grey')
      .style('font-size', '14')
      .style('stroke-width', 1)
      .call(xAxis, grids);
      
      //Grids
      var grids = svg.append("g")
         .attr("class", "grid")
         .call(axisLeft(yScale)
            .tickSize(-(dimensions.width))
            .tickFormat("")
            )

      //Y-Achsen-Beschrifzung
      svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("fill", "grey")
    .attr("y", - 50)
    .attr("x", 0)
    .text("Prozent")

    

      //Tooltip-Circle
      var focus = svg
      .append('g')
      .append('circle')
      .style("fill", "#2770bc")
      .attr('r', 8.5)
      .style("opacity", 0);

      //Tooltip- Values
      var focusText = svg
      .append('g')
      .append('text')
      .style("opacity", 0)
      .attr("text-anchor", "left")
      .attr("alignment-baseline", "middle");

      svg
      .append('rect')
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)
   /**    .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseout', mouseout); */

      const curve = curveLinear;

      const myArea = area()
      .x((d)=> (xScale(new Date(d.key))))
      .y0(dimensions.height)
      .y((d)=> (yScale(d.value)))
      .curve(curve)

      var path1 = svg
      .append("path")
      .data([valesMann])
      .join("path")
      .attr("class", "line1")
      .exit().remove();
      var path2 = svg  
      .append("path")
      .data([valesFrau]) 
      .join("path")
      .attr("class", "line2")
      .exit().remove();
      tick();

      function tick() {
        svg.selectAll(".line1")
        .attr("d", (value, index) => myArea(value))
        .attr("fill", "#9f77d0")
        .attr("stroke", "#6810d4")
        .attr("stroke-width", "1.2" )
        

        svg.selectAll(".line2")
        .attr("d", (b, index) => myArea(b))
        .attr("fill", "#d781d7")
        .attr("stroke", "#d043ee")
      .attr("stroke-width", "1.2" )
      

      }

  /*  svg
      .selectAll("path")
      .join("area2")
      .data([valesMann])
      .attr("d", (value, index) => myLine(value))
      .attr("fill", "#9f77d0")
      .attr("stroke", "#6810d4")
      .attr("stroke-width", "1.2" )
     
     
     var path = svg.append("path");
      path
      .data([valesFrau])
      .join("line")
      .attr("d", (a, index) => myLine2(a))
      .attr("fill", "#d781d7")
      .attr("stroke", "#d043ee")
      .attr("stroke-width", "1.2" ) */
  
      function mouseover() {
         
         focus.style("opacity", 1).transition()
         focusText.style("opacity",1).transition()
       }
       
       function mousemove() {
         var x0 = xScale.invert(mouse(this)[0]);
         const bisect = bisector(d => new Date(d.key)).left;
         const idx = bisect(filtered, x0, 1);
         const selectedData = filtered[idx];
         console.log( selectedData);
         
         focus
         .transition()
         .duration(80)
         .attr("cx", xScale(new Date (selectedData.key)))
         .attr("cy", yScale(selectedData.value))
         

         focusText
         .transition()
         .duration(80)
            .text(selectedData.key  + " : " + selectedData.value + "%")
            .attr("x", xScale(new Date (selectedData.key)))
            .attr("y", yScale(selectedData.value) - 30)
          
         }
       function mouseout() {
         focus.style("opacity", 0)
         focusText.style("opacity", 0)
       }


   }, [data, dimensions, property]);
    return (
     <div  className="IKTWarapperRef" ref={wrapperRef} >
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    );
    }
    
    export default AreaIKTBeschäftigung;