import React, {useEffect, useState} from 'react';
import styles from './Answers.module.css'
import {AnswerResult, SearchResult, UserResult} from "../../../types/SearchTypes";
import {answers, questions} from "../../../api/searchApi";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import SearchResults from "../../search/searchResults/SearchResults";

type Props = {
    userResponse: UserResult
};

const Answers: React.FC<Props> = (props) => {
    const userResponse = props.userResponse;

    const [answersResults, setAnswersResults] = useState([] as AnswerResult[]);
    const [questionResults, setQuestionResults] = useState([] as SearchResult[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        answers(userResponse.user_id)
            .then(resp => {
                setAnswersResults(resp.items as AnswerResult[]);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [userResponse.user_id])

    useEffect(() => {
        if(answersResults.length > 0) {
            setLoading(true);
            questions(answersResults.map(item => item.question_id).join(';'))
                .then(resp => {
                    setQuestionResults(resp.items as SearchResult[]);
                })
                .catch(error => console.log(error))
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [answersResults])

    return (
        <div className={styles.container}>
            <h2>Answers</h2>
            {loading ? (<LoadingSpinner />) : (<SearchResults searchResults={questionResults}/>)}
        </div>
    );
};

export default Answers;