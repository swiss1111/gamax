import React from 'react';
import styles from './UserHeader.module.css'
import {timestampToDateString} from "../../../utils/dateUtils";
import {UserResult} from "../../../types/SearchTypes";

type Props = {
    userResponse: UserResult
};

const UserHeader: React.FC<Props> = (props) => {
    const userResponse = props.userResponse;

    return (
        <div className={styles.container}>
            <img src={userResponse.profile_image} alt={userResponse.display_name}/>
            <div className={styles.userDetails}>
                <h2 className={styles.userName}><a href={userResponse.link} target="_blank">{userResponse.display_name}</a></h2>
                <div>
                    {`Registered on ${timestampToDateString(userResponse.creation_date)}`}
                </div>
                {userResponse.website_url && (<a href={userResponse.website_url} target="_blank">Website</a>)}
            </div>
        </div>
    );
};

export default UserHeader;