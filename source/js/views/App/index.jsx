import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PickUpInput from 'components/App/PickUpInput';
import PickUpResults from 'components/App/PickUpResults';

export default class App extends Component {
    render() {
        return (
            <div>
                <PickUpInput/>
                <PickUpResults/>
            </div>
        );
    }
}
