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
                            className: 'my-data-list-item',
                            title: 'Work Format',
                            value: 'Office',
                            prefix: <div className='avatar'>
                                <svg className='icon' viewBox="0 0 24 24">
                                    <path d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z" />
                                </svg>
                            </div>,
                            suffix: <hr className='separator' />
                        },
                        {
                            title: 'Work Location',
                            value: <>
                                Ижевск
                                <br />
                                Россия
                            </>,
                        },
                        {
                            title: 'Employment Status',
                            value: 'Full-time (1 FTE)',
                        },
                        {
                            title: 'Production Category',
                            value: 'Production',
                        },
                        {
                            title: 'Job Function',
                            value: 'Software Engineering',
                        },
                        {
                            title: 'Track & Level',
                            value: 'A3',
                        },
                    ] }
                />
            </Box>
        </div>
    );
}
