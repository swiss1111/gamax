import React from 'react';

type Props = {
    title: string;
};

const Header: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <nav>

            </nav>
        </div>
    );
};

export default Header;