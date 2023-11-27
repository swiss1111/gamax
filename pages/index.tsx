import React, {useState} from "react"
import Layout from "../components/Layout"
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";
import {SearchResponse, SearchResult} from "../types/SearchTypes";
import {search} from "../api/searchApi";

// const searchMockResponse:SearchResponse = {
//     "items": [
//         {
//             "tags": [
//                 "react-native",
//                 "native"
//             ],
//             "owner": {
//                 "account_id": 29925362,
//                 "reputation": 1,
//                 "user_id": 22933524,
//                 "user_type": "registered",
//                 "profile_image": "https://lh3.googleusercontent.com/a/ACg8ocKqojC88NqDktkTw7_J70gBSwVbBqnj8tu6WvnJZReEzSQ=k-s256",
//                 "display_name": "Desislava Nikolova",
//                 "link": "https://stackoverflow.com/users/22933524/desislava-nikolova"
//             },
//             "is_answered": false,
//             "view_count": 29,
//             "answer_count": 0,
//             "score": 0,
//             "last_activity_date": 1701082017,
//             "creation_date": 1701075292,
//             "last_edit_date": 1701082017,
//             "question_id": 77555590,
//             "content_license": "CC BY-SA 4.0",
//             "link": "https://stackoverflow.com/questions/77555590/i-cant-use-an-item-in-another-screen-in-react-native",
//             "title": "I can&#39;t use an item in another screen in React Native"
//         },
//         {
//             "tags": [
//                 "reactjs",
//                 "spring-boot",
//                 "spring-security",
//                 "oauth-2.0",
//                 "vite"
//             ],
//             "owner": {
//                 "account_id": 27564521,
//                 "reputation": 1,
//                 "user_id": 21036979,
//                 "user_type": "registered",
//                 "profile_image": "https://www.gravatar.com/avatar/32461b32fb741254f573826b2e674e10?s=256&d=identicon&r=PG",
//                 "display_name": "Sansaa59",
//                 "link": "https://stackoverflow.com/users/21036979/sansaa59"
//             },
//             "is_answered": false,
//             "view_count": 4,
//             "answer_count": 0,
//             "score": 0,
//             "last_activity_date": 1701081899,
//             "creation_date": 1701081899,
//             "question_id": 77556261,
//             "content_license": "CC BY-SA 4.0",
//             "link": "https://stackoverflow.com/questions/77556261/oauth2-flow-with-spring-and-react",
//             "title": "OAuth2 flow with Spring and React"
//         },
//         {
//             "tags": [
//                 "reactjs",
//                 "react-hooks"
//             ],
//             "owner": {
//                 "account_id": 9458018,
//                 "reputation": 598,
//                 "user_id": 10901575,
//                 "user_type": "registered",
//                 "profile_image": "https://www.gravatar.com/avatar/6f7fa802ea797579f98f30303905b5fa?s=256&d=identicon&r=PG&f=y&so-version=2",
//                 "display_name": "Surya Bhusal",
//                 "link": "https://stackoverflow.com/users/10901575/surya-bhusal"
//             },
//             "is_answered": false,
//             "view_count": 24,
//             "answer_count": 2,
//             "score": 0,
//             "last_activity_date": 1701081629,
//             "creation_date": 1701079868,
//             "question_id": 77556063,
//             "content_license": "CC BY-SA 4.0",
//             "link": "https://stackoverflow.com/questions/77556063/how-does-react-memonization-and-usecallback-works",
//             "title": "How does React Memonization and useCallback Works?"
//         },
//         {
//             "tags": [
//                 "react-native",
//                 "react-native-navigation",
//                 "react-native-router-flux",
//                 "react-navigation-top-tabs"
//             ],
//             "owner": {
//                 "account_id": 25124793,
//                 "reputation": 91,
//                 "user_id": 18972705,
//                 "user_type": "registered",
//                 "profile_image": "https://lh3.googleusercontent.com/a-/AOh14Gi1kOvgwjxQILRm5L6frivFWYDjx0-hz1zTBZ-K=k-s256",
//                 "display_name": "MST intern 2",
//                 "link": "https://stackoverflow.com/users/18972705/mst-intern-2"
//             },
//             "is_answered": false,
//             "view_count": 15,
//             "answer_count": 0,
//             "score": 1,
//             "last_activity_date": 1701081249,
//             "creation_date": 1700482292,
//             "last_edit_date": 1701081249,
//             "question_id": 77515812,
//             "content_license": "CC BY-SA 4.0",
//             "link": "https://stackoverflow.com/questions/77515812/react-native-data-passing-in-material-top-tabs-navigator",
//             "title": "React Native Data Passing in Material Top Tabs Navigator"
//         },
//         {
//             "tags": [
//                 "react-hooks",
//                 "react-router",
//                 "hyperlink"
//             ],
//             "owner": {
//                 "account_id": 30002842,
//                 "reputation": 1,
//                 "user_id": 22992438,
//                 "user_type": "registered",
//                 "profile_image": "https://lh3.googleusercontent.com/a/ACg8ocL3zbWEMrYb3zsJBDq-lyJ3tB_l4HiEZS47R5Jte9BXxXQ=k-s256",
//                 "display_name": "Iwuno Samuel",
//                 "link": "https://stackoverflow.com/users/22992438/iwuno-samuel"
//             },
//             "is_answered": false,
//             "view_count": 4,
//             "answer_count": 0,
//             "score": 0,
//             "last_activity_date": 1701080331,
//             "creation_date": 1701080331,
//             "question_id": 77556108,
//             "content_license": "CC BY-SA 4.0",
//             "link": "https://stackoverflow.com/questions/77556108/react-js-images-are-not-displaying-both-on-local-host-and-github-pages",
//             "title": "react,js images are not displaying both on local host and github pages"
//         }
//     ],
//     "has_more": true,
//     "quota_max": 10000,
//     "quota_remaining": 9975
// }

type Props = {}

const Search: React.FC<Props> = () => {
    const [searchResults, setSearchResults] = useState([] as SearchResult[]);

    function handleSearch(searchData) {
        search(searchData.search)
            .then(resp => {
                console.log('index.tsx', searchData, resp);
                setSearchResults(resp.items)
            })
            .catch(error => {
                console.log(error)
            });

        // setSearchResults(searchMockResponse.items as SearchResult[])
    }

    return (
        <Layout title="Search">
            <SearchBar onSearch={handleSearch}/>
            <SearchResults searchResults={searchResults}/>
        </Layout>
    )
}

export default Search
