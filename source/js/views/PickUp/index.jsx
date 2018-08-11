import React, { Component } from 'react';
import api from 'libs/api-client';

import PickUpInput from 'components/PickUp/PickUpInput';
import PickUpResults from 'components/PickUp/PickUpResults';

export default class PickUpReact extends Component {
    state = {
        search_performed: false,
        search_term: '',
        results: [],
    }

    onInputChange = (search_term) => {
        this.setState({ search_term });

        if (search_term.length >= 2) {
            api.search(search_term)
                .then(results => this.setState({ search_performed: true, results }))
                .catch(() => this.setState({ search_performed: true, results: [] }));
        }
    }

    render() {
        const { search_term, results, search_performed } = this.state;

        return (
            <div className="container">
                <div className="box box--pickup-location">
                    <div className="form-holder form-holder--pickup-location">
                        <h2 className="form-holder__title">Where are you going?</h2>
                        <PickUpInput search_term={ search_term } onChange={ this.onInputChange } />
                        {search_term.length > 1 && search_performed && <PickUpResults results={ results } search_performed={ search_performed }/>}
                    </div>
                </div>
            </div>
        );
    }
}
