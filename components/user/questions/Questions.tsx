import React, {useEffect, useState} from 'react';
import styles from './Questions.module.css'
import {SearchResult, UserResult} from "../../../types/SearchTypes";
import {questionByUser} from "../../../api/searchApi";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import SearchResults from "../../search/searchResults/SearchResults";

type Props = {
    userResponse: UserResult
};

const Questions: React.FC<Props> = (props) => {
    const userResponse = props.userResponse;

    const [questionResults, setQuestionResults] = useState([] as SearchResult[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        questionByUser(userResponse.user_id)
            .then(resp => {
                setQuestionResults(resp.items as SearchResult[]);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [userResponse.user_id])

    return (
        <div className={styles.container}>
            <h2>Questions</h2>
            {loading ? (<LoadingSpinner />) : (<SearchResults searchResults={questionResults}/>)}
        </div>
    );
};

export default Questions;