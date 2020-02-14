import React from 'react';
import '../styles/header.css'

export default function Header(probs) {

    return (
    <div className="header">
      <div className ="textForHeader">
          <h2>{probs.überschrift1} <br></br>{probs.überschrift2}</h2>
          <p className="boldText">{probs.boldText} </p>
          <p className="normalText">{probs.normalText}</p>
      </div>
      {probs.mapchart}
        
    </div>
    );
}