import React, {useEffect, useState} from 'react';
import Layout from '../../components/layout/Layout';
import {useRouter} from "next/router";
import {SearchResponse, UserResult} from "../../types/SearchTypes";
import {user} from "../../api/searchApi";
import {timestampToDateString} from "../../utils/dateUtils";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

// const userMockResponse: SearchResponse = {
//     "items": [
//         {
//             "badge_counts": {
//                 "bronze": 0,
//                 "silver": 0,
//                 "gold": 0
//             },
//             "account_id": 29925362,
//             "is_employee": false,
//             "last_modified_date": 1700211421,
//             "last_access_date": 1701081968,
//             "reputation_change_year": 0,
//             "reputation_change_quarter": 0,
//             "reputation_change_month": 0,
//             "reputation_change_week": 0,
//             "reputation_change_day": 0,
//             "reputation": 1,
//             "creation_date": 1700211405,
//             "user_type": "registered",
//             "user_id": 22933524,
//             "website_url": "",
//             "link": "https://stackoverflow.com/users/22933524/desislava-nikolova",
//             "profile_image": "https://lh3.googleusercontent.com/a/ACg8ocKqojC88NqDktkTw7_J70gBSwVbBqnj8tu6WvnJZReEzSQ=k-s256",
//             "display_name": "Desislava Nikolova"
//         }
//     ],
//     "has_more": false,
//     "backoff": 10,
//     "quota_max": 10000,
//     "quota_remaining": 9958
// }

type Props = {};

const User: React.FC<Props> = () => {
    const router = useRouter();
    const params = router?.query;
    const id = parseInt(params?.id as string);

    const [userResponse, setUserResponse] = useState(undefined as UserResult);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        user(id)
            .then(resp => {
                console.log('[id].tsx', resp);
                setUserResponse(resp.items[0] as UserResult);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            });

        // setUserResponse(userMockResponse.items[0] as UserResult);
    }, [])

    return (
        <Layout title="User">
            {userResponse && !loading && (
                <div>
                    <div className="header">
                        <h2><a href={userResponse.link} target="_blank">{userResponse.display_name}</a></h2>
                        <div>
                            {`Registered on ${timestampToDateString(userResponse.creation_date)}`}
                        </div>
                        <img src={userResponse.profile_image} alt={userResponse.display_name}/>
                        {userResponse.website_url && (<a href={userResponse.website_url} target="_blank">Website</a>)}
                    </div>
                    <div className="body">
                        {Object.keys(userResponse.badge_counts).map(badge => (
                            <div key={badge}>
                                {`${badge}: ${userResponse.badge_counts[badge]}`}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {loading && (<LoadingSpinner />)}
        </Layout>
    );
};

export default User;