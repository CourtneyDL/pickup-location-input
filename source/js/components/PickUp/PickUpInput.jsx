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

    focusInput () {
        if (this.input_elem) {
            this.input_elem.focus();
        }
    }

    onChange(e) {
        this.props.onChange(e.currentTarget.value);
    }

    componentDidMount () {
        this.focusInput();
    }

    render() {
        return (
            <div>
                <fieldset className="fieldset fieldset--pickup-location">
                    <label id="search_term_label" className="fieldset__label fieldset__label--pickup-location" htmlFor="search_term">Pick-Up Location</label>
                    <input type="text" id="search_term" className="fieldset__input fieldset__input--pickup-location"
                        name="search_term" value={this.props.search_term} 
                        ref={elem => this.input_elem = elem}
                        placeholder="city, airport, station, region and district..."
                        aria-autocomplete="list" aria-haspopup="true"
                        aria-required="true"
                        aria-describedby="search_term_description"
                        onChange={this.onChange.bind(this)}/>
                </fieldset>
            </div>
        );
    }
}
