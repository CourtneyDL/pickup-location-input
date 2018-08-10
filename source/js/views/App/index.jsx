import React from 'react';

import PickUp from 'views/PickUp';
import PickUpReact from 'views/PickUpReact';

const App = ({ results }) => (
    <div className="container">
        <PickUp/>
        <PickUpReact/>
    </div>
);

export default App;