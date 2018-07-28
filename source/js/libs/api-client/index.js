import axios from 'axios';

const search = (search_term, number_of_results_required=10) => {
    //TODO Implement search api call and result handling
    //https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={number_of_results_required}&solrTerm={search_term}
    return [`${search_term}[10]`];
}

const _get = url => {
    return axios.get(url)
        .then(response => response.data);
}

export default {
    search
};