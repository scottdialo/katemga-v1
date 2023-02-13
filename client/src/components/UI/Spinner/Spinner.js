import React from 'react';

import './Spinner.css';

const spinner = (props) => (
    <div className="loader-container" style={{
        
      }}>
    <div style={{top: props.top}} className="Loader"></div>
     <p className="my-1">{props.title}</p>
    </div>
);

export default spinner;