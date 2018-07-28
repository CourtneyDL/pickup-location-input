import _ from 'lodash/object';
import axios from 'axios';

const search = (search_term, number_of_results_required=6) => {
    search_term = search_term.replace(/\s/g,'+');
    return _get(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${number_of_results_required}&solrTerm=${search_term}`)
        .then(_processResponse);
}

export const _processResponse = data => {
    const results_found = _.get(data, 'results.numFound', 0);
    const raw_results = _.get(data, 'results.docs', []);

    if (results_found === 0) {
        return [];
    }

    return raw_results.map(raw_result => {
        const { name='', placeType:place_type='' } = raw_result || {};
        const locality = ['city','region','country'].reduce((acc, prop) => {
            if (raw_result[prop]) {
                acc += (acc.length > 0 ? ', ' : '') + raw_result[prop];
            }

            return acc;
        }, '');

        return {
            name,
            place_type,
            locality
        }
    });
};

const _get = url => {
    return axios.get(url)
        .then(response => response.data);
}

export default {
    search
};