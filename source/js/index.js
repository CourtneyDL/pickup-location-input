import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import PickUp from 'views/Pickup';

// Load SCSS
import '../scss/main.scss'; 

// Render it to DOM
ReactDOM.render(<PickUp/>, document.getElementById('root'));