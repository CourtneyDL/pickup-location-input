import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { updateSearchTerm } from 'redux-state/actions/search';

import PickUpInput from 'components/PickUp/PickUpInput';
import PickUpResults from 'components/PickUp/PickUpResults';

export class PickUp extends Component {
    static propTypes = {
        search_performed: PropTypes.bool,
        search_term: PropTypes.string,
        results: PropTypes.object,

        updateSearchTerm: PropTypes.func
    }

    static defaultProps = {
        search_performed: false,
        search_term: '',
        results: List([])
    }

    onInputChange (value) {
        this.props.updateSearchTerm(value);
    }

    render() {
        const { search_term, results, search_performed } = this.props;
        const results_array = results.toJS();

        return (
            <div className="pickup-location-container">
                <div className="pickup-location-holder">
                    <h2>Where are you going?</h2>
                    <PickUpInput search_term={search_term} onChange={this.onInputChange.bind(this)} />
                    {search_term.length > 1 && search_performed && <PickUpResults results={results_array} search_performed={search_performed}/>}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        search_performed: state.search.get('search_performed'),
        search_term: state.search.get('search_term'),
        results: state.search.get('results')
    }),
    dispatch => bindActionCreators({ updateSearchTerm }, dispatch)
)(PickUp);
