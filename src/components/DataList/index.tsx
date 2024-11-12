import React from 'react';

import './data-list.css';

interface IProps {
    items: Array<{
        className?: string;
        title: React.ReactNode;
        value: React.ReactNode;
    }>;
}

export default function DataList(props: Readonly<IProps>) {
    const { items } = props;

    return (
        <dl className='data-list'>
            {
                items.map(({ className, title, value }) => (
                    <div className={ `${className ?? ''} data-list__item` }>
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
