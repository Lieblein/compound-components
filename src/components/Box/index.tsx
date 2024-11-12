import React from 'react';

import './box.css';

interface IProps {
    children: React.ReactNode;
}

export default function Box(props: Readonly<IProps>) {
    const { children } = props;

    return (
        <div className='box'>
            { children }
        </div>
    );
}
