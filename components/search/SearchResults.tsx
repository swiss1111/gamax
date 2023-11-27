import React from 'react';
import {SearchResult} from "../../types/SearchTypes";
import Link from "next/link";

type Props = {
    searchResults: SearchResult[]
};

const SearchResults: React.FC<Props> = (props) => {
    return (
        <div>
            {props.searchResults.map(result => (
                <div key={result.question_id}>
                    <div className="header">
                        <h2><a href={result.link} target="_blank">{result.title}</a></h2>
                    </div>
                    <div className="body">
                        <div className="tags">
                            {result.tags.map( tag => (
                                <div key={tag}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className="footer">
                        <div className="owner">
                            <Link href={`/user/${result.owner.user_id}`}>{result.owner.display_name}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;