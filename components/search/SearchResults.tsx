import React from 'react';
import {SearchResult} from "../../types/SearchTypes";

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
                            <a href={result.owner.link}>{result.owner.display_name}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;