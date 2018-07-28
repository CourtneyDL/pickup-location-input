import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PickUpResult from 'components/App/PickUpResult';

export class PickUpResults extends Component {
    static propTypes = {
        results: PropTypes.array,
    }

    static defaultProps = {
        results: []
    }

    render() {
        const { results } = this.props;

        return (
            <div className={results.length === 0 ? 'hidden' : undefined}>
                {results.map((result,index) => <PickUpResult key={index} data={result}/>)}
            </div>
        );
    }
}

export default connect(
    state => ({
        results: state.search.get('results').toArray()
    })
)(PickUpResults);