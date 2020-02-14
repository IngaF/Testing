import React from 'react';
import '../styles/highlight.css'

export default function Highlight(probs) {    
    return (
    <div className="highlight">
        <div>
    <h3>Highlightbox</h3>
    <h4 > {probs.überschrift}</h4>
    <p >{probs.text}</p>
    </div>  
    </div>
    );
}