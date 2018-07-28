import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PickUpResult extends Component {
    static propTypes = {
        data: PropTypes.string,
    }

    static defaultProps = {
        data: ''
    }

    render() {
        const { data } = this.props;

        return (
            <div>{data}</div>
        );
    }
}
