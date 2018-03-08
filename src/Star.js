import React from 'react';
import './Star.css'

const Star = ({selected, preSelected, onClick, onMouseMove}) =>
    <span className={"star" + ((selected) ? " selected" : "") + ((preSelected) ? " preselected" : "")}
          onClick={onClick}
          onMouseOut={onMouseMove}
          onMouseMove={onMouseMove}>
    </span>;

export default Star;