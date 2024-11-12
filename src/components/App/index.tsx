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
