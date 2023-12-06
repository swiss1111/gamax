import React from 'react';
import {QuestionResult} from "../../../types/SearchTypes";
import Link from "next/link";
import styles from './SearchResults.module.css'
import {timestampToDateString} from "../../../utils/dateUtils";

type Props = {
    searchResults: QuestionResult[]
};

const SearchResults: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            {props.searchResults.map(result => (
                <div key={result.question_id} className={styles.questionContainer}>
                    <div className={styles.header}>
                        <h2><a href={result.link} target="_blank">{result.title}</a></h2>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.tags}>
                            {result.tags.map( tag => (
                                <div key={tag} className={styles.tagContainer}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.date}>
                            {timestampToDateString(result.creation_date)}
                        </div>
                        <div className={styles.owner}>
                            <Link className={styles.ownerLink} href={`/user/${result.owner.user_id}`}>
                                {result.owner.display_name}
                                <img className={styles.ownerImage} src={result.owner.profile_image} alt={result.owner.display_name}/>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;