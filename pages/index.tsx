import React, {useState} from "react"
import Layout from "../components/layout/Layout"
import SearchBar from "../components/search/searchBar/SearchBar";
import SearchResults from "../components/search/searchResults/SearchResults";
import {SearchResult} from "../types/SearchTypes";
import {search} from "../api/searchApi";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";

type Props = {}

const Search: React.FC<Props> = () => {
    const [searchResults, setSearchResults] = useState([] as SearchResult[]);
    const [loading, setLoading] = useState(false);

    function handleSearch(searchData) {
        setLoading(true);
        search(searchData.search)
            .then(resp => {
                setSearchResults(resp.items)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Layout title="Search">
            <SearchBar onSearch={handleSearch}/>
            {loading ? (<LoadingSpinner />) : (<SearchResults searchResults={searchResults}/>)}
        </Layout>
    )
}

export default Search
