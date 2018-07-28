import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PickUpInput extends Component {
    static propTypes = {
        search_term: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        search_term: '',
        onChange: () => {}
    }

    onChange(e) {
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        return (
            <div className="pickup-location-input">
                <label htmlFor="search_term">Pick-Up Location</label>
                <input type="text" name="search_term" value={this.props.search_term} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}
