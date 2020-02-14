import React from 'react';
import '../styles/content.css'

export default function Content(probs) {

    return (
            <div className="content">
                <div className="contentWrap">
                <div className="textWrap">
                <h1>{probs.überschrift}</h1>
                    <p className="contentText">{probs.text}</p>
                </div>
                <div className="textNumber">
                    <p className="number">{probs.highlightNumber}</p>
                    <p className="numberText">{probs.erklärungsText} </p>
                </div>
                </div>
        </div>
    );
}