import React from 'react';

import Box from '../Box';
import DataList from '../DataList';
import './app.css';

export default function App() {
    return (
        <div className='app'>
            <h1 className='title'>
                DataList
            </h1>
            <Box>
                <DataList
                    items={ [
                        {
                            title: 'Project Code',
                            value: '123',
                        },
                        {
                            title: 'Financial Model',
                            value: 'Fixed-Price',
                        },
                        {
                            title: 'Status',
                            value: 'Billable Project / In Progress',
                        },
                        {
                            title: 'Customer',
                            value: '123',
                        },
                        {
                            className: 'my-data-list-item',
                            title: 'Planned Start Date',
                            value: '4 NOV 2024',
                        },
                        {
                            className: 'my-data-list-item',
                            title: 'Planned End Date',
                            value: '16 FEB 2025',
                        },
                        {
                            className: 'my-data-list-item',
                            title: 'End Warranty Date',
                            value: '28 FEB 2025',
                        },
                        {
                            className: 'my-data-list-item',
                            title: 'Warranty Obligations Reserve',
                            value: '3%',
                        },
                        {
                            title: 'Account Manager',
                            value: <a
                                href="https://develonica.ru/employee/1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Чичерин Максим
                            </a>,
                        },
                        {
                            title: 'Project Manager',
                            value: <a
                                href="https://develonica.ru/employee/2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Пронин Денис
                            </a>,
                        },
                    ] }
                />
            </Box>
        </div>
    );
}
