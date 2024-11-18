import React from 'react';

import './data-list.css';

interface IDataListProps {
    className?: string;
    children: React.ReactNode;
}
function DataList({ className, children }: IDataListProps) {
    return (
        <div className={ `${className ?? ''} data-list` }>
            { children }
        </div>
    );
}

interface IItemProps {
    className?: string;
    children: React.ReactNode;
}
DataList.Item = function Item({ className, children }: IItemProps) {
    return (
        <div className={ `${className ?? ''} data-list__item` }>
            { children }
        </div>
    );
};

interface ITitleProps {
    className?: string;
    children: React.ReactNode;
}
DataList.Title = function Title({ className, children }: ITitleProps) {
    return (
        <div className={ `${className ?? ''} data-list__title` }>
            { children }
        </div>
    );
};

interface IValueProps {
    className?: string;
    children?: React.ReactNode;
}
DataList.Value = function Value({ className, children }: IValueProps) {
    return (
        <div className={ className ?? '' }>
            { children }
        </div>
    );
};

export default DataList;
