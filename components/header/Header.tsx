import React from 'react';
import styles from './Header.module.css';
import Link from "next/link";
import {useRouter} from "next/router";

type Props = {
    title: string;
};

const Header: React.FC<Props> = (props) => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles.backButtonWrapper}>
                {router.pathname !== '/' && (<Link href={`/`}>Search</Link>)}
            </div>
        </div>
    );
};

export default Header;