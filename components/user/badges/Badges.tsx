import React from 'react';
import styles from './Badges.module.css'
import {UserResult} from "../../../types/SearchTypes";

type Props = {
    userResponse: UserResult
};

const Badges: React.FC<Props> = (props) => {
    const userResponse = props.userResponse;

    return (
        <div className={styles.container}>
            {Object.keys(userResponse.badge_counts).map(badge => (
                <div key={badge} className={styles.badgeContainer}>
                    <span className={styles.badgeTitle}>{badge}</span>
                    {`: ${userResponse.badge_counts[badge]}`}
                </div>
            ))}
        </div>
    );
};

export default Badges;