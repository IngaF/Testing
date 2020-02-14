import React from 'react';
import '../styles/content.css'

export default function Content2(probs) {
    return (
    <div className="content2">
        {probs.chart}
        {probs.chart2}
        {probs.chart3}
        {probs.chart4}
    </div>
    );
}