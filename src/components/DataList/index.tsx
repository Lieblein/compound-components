import React from 'react';

import './data-list.css';

interface IProps {
    items: Array<{
        className?: string;
        title: React.ReactNode;
        value: React.ReactNode;
        prefix?: React.ReactNode;
    }>;
}

export default function DataList(props: Readonly<IProps>) {
    const { items } = props;

    return (
        <dl className='data-list'>
            {
                items.map((
                    {
                        className,
                        title,
                        value,
                        prefix,
                    },
                    index,
                ) => (
                    <div
                        key={ index }
                        className={ `${className ?? ''} data-list__item` }
                    >
                        { prefix }
                        <div>
                            <dt className='data-list__title'>
                                { title }
                            </dt>
                            <dd>
                                { value }
                            </dd>
                        </div>
                    </div>
                ))
            }
        </dl>
    );
}
