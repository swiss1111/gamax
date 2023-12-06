import React, {useState} from "react"
import Layout from "../components/layout/Layout"
import SearchBar from "../components/search/searchBar/SearchBar";
import SearchResults from "../components/search/searchResults/SearchResults";
import {QuestionResult} from "../types/SearchTypes";
import {search} from "../api/searchApi";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";

type Props = {}

const Search: React.FC<Props> = () => {
    const [searchResults, setSearchResults] = useState([] as QuestionResult[]);
    const [loading, setLoading] = useState(false);

    function handleSearch(searchData) {
        setLoading(true);
        search(searchData.text)
            .then(resp => {
                setSearchResults((resp.items as QuestionResult[]))
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
