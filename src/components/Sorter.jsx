import React from 'react';
import '../styles/Visualizer.css';

const Visualizer = ({ arrayInput, currentIndex }) => {
    return (
        <div className="container">
            <span>{currentIndex >= arrayInput.length ? 'Sorted' : `Sorting : ${currentIndex}`}</span>
            {
                arrayInput.map((item, index) => {
                    return (
                        <div className={ (currentIndex-1) < index  ? "element " : "element sorted"} style={{height: `${item}%`}} key={index}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Visualizer;