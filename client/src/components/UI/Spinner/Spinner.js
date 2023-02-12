import React from 'react';

import './Spinner.css';

const spinner = (props) => (
    <div style={{top: props.top}} className="Loader">Loading...</div>
);

export default spinner;