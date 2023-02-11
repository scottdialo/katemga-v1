import React from 'react';

import  './Backdrop.css';

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default Backdrop;