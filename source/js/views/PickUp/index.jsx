import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchTerm } from 'redux-state/actions/search';

import PickUpInput from 'components/PickUp/PickUpInput';
import PickUpResults from 'components/PickUp/PickUpResults';

export class PickUp extends Component {
    static propTypes = {
        search_term: PropTypes.string,
        results: PropTypes.object,

        updateSearchTerm: PropTypes.func
    }

    static defaultProps = {
        search_term: '',
        results: {
            toArray: () => []
        }
    }

    onInputChange (value) {
        this.props.updateSearchTerm(value);
    }

    render() {
        const { search_term, results } = this.props;
        const results_array = results.toArray();

        return (
            <div className="pickup-location-container">
                <h2>Where are you going?</h2>
                <PickUpInput search_term={search_term} onChange={this.onInputChange.bind(this)} />
                {results_array.length > 0 && <PickUpResults results={results_array}/>}
            </div>
        );
    }
}

export default connect(
    state => ({
        search_term: state.search.get('search_term'),
        results: state.search.get('results')
    }),
    dispatch => bindActionCreators({ updateSearchTerm }, dispatch)
)(PickUp);
