import React from 'react';

import Table from '../Table';
import './levels-table.css';

const FAKE_DATA = [1, 2, 3, 4].map((i) => [1, 2, 3, 4, 5].map((j) => Math.round(Math.random() * i * 10 + j)));

export default function LevelsTable() {
    return (
        <Table className='levels-table'>
            <thead>
                <Table.Row rowIndex={ 0 }>
                    {
                        ['', 'L0', 'L1', 'L2', 'L3', 'L4'].map((title, index) => (
                            <Table.Cell
                                key={ title }
                                className='levels-table__cell'
                                head={ true }
                                colIndex={ index }
                            >
                                { title }
                            </Table.Cell>
                        ))
                    }
                </Table.Row>
            </thead>
            <tbody>
                {
                    [
                        'Develonica',
                        'Ижевск',
                        'Кострома',
                        'Москва',
                    ].map((city, cityIndex) => (
                        <Table.Row
                            key={ city }
                            rowIndex={ cityIndex + 1 }
                        >
                            <Table.Cell
                                className={ `levels-table__cell ${cityIndex === 0 ? 'levels-table__cell--bold' : ''}` }
                                colIndex={ 0 }
                            >
                                { city }
                            </Table.Cell>
                            {
                                FAKE_DATA[cityIndex].map((data, index) => (
                                    <Table.Cell
                                        key={ index }
                                        className='levels-table__cell'
                                        colIndex={ index + 1 }
                                    >
                                        { data }
                                    </Table.Cell>
                                ))
                            }
                        </Table.Row>
                    ))
                }
            </tbody>
        </Table>
    );
}
