import React from 'react';

import './data-list.css';

interface IProps {
    items: Array<{
        title: React.ReactNode;
        value: React.ReactNode;
    }>;
}

export default function DataList(props: Readonly<IProps>) {
    const { items } = props;

    return (
        <dl className='data-list'>
            {
                items.map(({ title, value }) => (
                    <div>
                        <dt className='data-list__title'>
                            { title }
                        </dt>
                        <dd>
                            { value }
                        </dd>
                    </div>
                ))
            }
        </dl>
    );
}
