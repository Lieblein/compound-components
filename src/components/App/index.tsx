import React from 'react';

import LevelsTable from '../LevelsTable';
import './app.css';

export default function App() {
    return (
        <div className='app'>
            <h1 className='title'>
                Table
            </h1>
            <LevelsTable />
        </div>
    );
}
