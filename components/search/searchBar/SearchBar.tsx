import React, {useState} from 'react';
import styles from './SearchBar.module.css'

type Props = {
    onSearch: (searchData) => void;
};

const SearchBar: React.FC<Props> = (props) => {
    const [searchText, setSearchText] = useState('');

    function handleChangeSearchText(event) {
        setSearchText(event.target.value);
    }

    function handleClickSearchButton(event) {
        event.preventDefault();
        props.onSearch({
            text: searchText,
        })
    }

    return (
        <div className={styles.container}>
            <input className={styles.searchText} type="text" value={searchText} onChange={handleChangeSearchText} />
            <button onClick={handleClickSearchButton}>Search</button>
        </div>
    );
};

export default SearchBar;