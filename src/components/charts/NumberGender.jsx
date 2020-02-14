import React, { useRef, useEffect, useState } from "react";
import { select} from 'd3';
import useResizeObserver from "./useReziseObserver";


function NumberGen({ data, property, gen, number }) {

    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {
        const svg = select(svgRef.current);
     
         if(!dimensions) return;

         //Daten filtern
        var filtered = data.filter(a=>a.geo==property);
        var finalFilter = filtered.filter(b=>b.gen==gen);

       svg
        .selectAll("text")
        .data(finalFilter)
        .join("text")
        .transition()
        .text((s) => (s.time[Object.keys(s.time)[number]]) + "%")
        .attr('x', 0)
        .attr('y', 60)
        .attr("fill", "#2770bc")


}, [data, dimensions, property]);

return (
 <div className="prozentwrap" ref={wrapperRef} >
    <svg className="Prozent" ref={svgRef}>
     
    </svg>
  </div>
);
}

export default NumberGen;