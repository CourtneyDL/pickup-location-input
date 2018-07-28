import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchTerm } from 'redux-state/actions/search';

export class PickUpInput extends Component {
    static propTypes = {
        search_term: PropTypes.string,
        updateSearchTerm: PropTypes.func
    }

    static defaultProps = {
        search_term: ''
    }

    onChange(e) {
        this.props.updateSearchTerm(e.currentTarget.value);
    }

    render() {
        return (
            <div>
                <label htmlFor="search_term">Pick-Up Location</label>
                <input type="text" name="search_term" value={this.props.search_term} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        search_term: state.search.get('search_term')
    }),
    dispatch => ({
        updateSearchTerm: search_term => dispatch(updateSearchTerm(search_term))
    })
)(PickUpInput);
