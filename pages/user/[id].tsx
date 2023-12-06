import React, {useEffect, useState} from 'react';
import Layout from '../../components/layout/Layout';
import {useRouter} from "next/router";
import {UserResult} from "../../types/SearchTypes";
import {user} from "../../api/searchApi";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import UserHeader from "../../components/user/userHeader/UserHeader";
import Badges from "../../components/user/badges/Badges";
import Answers from "../../components/user/answers/Answers";
import Questions from "../../components/user/questions/Questions";

type Props = {};

const User: React.FC<Props> = () => {
    const router = useRouter();
    const params = router?.query;
    const id = params?.id as string;

    const [userResponse, setUserResponse] = useState(undefined as UserResult);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        user(id)
            .then(resp => {
                setUserResponse(resp.items[0] as UserResult);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [id])

    return (
        <Layout title="User">
            {userResponse && !loading && (
                <div>
                    <div className="header">
                        <UserHeader userResponse={userResponse} />
                    </div>
                    <div className="body">
                        <Badges userResponse={userResponse} />
                        <Questions userResponse={userResponse} />
                        <Answers userResponse={userResponse} />
                    </div>
                </div>
            )}
            {loading && (<LoadingSpinner />)}
        </Layout>
    );
};

export default User;