import React from 'react';

import './table.css';

const FAKE_DATA = [1, 2, 3, 4].map((i) => [1, 2, 3, 4, 5].map((j) => Math.round(Math.random() * i * 10 + j)));

export default function Table() {
    const [hoveredCell, setHoveredCell] = React.useState<{ rowIndex: number; colIndex: number; } | null>(null);
    const resetHoveredCell = () => setHoveredCell(null);

    return (
        <table className='table'>
            <thead>
                <tr>
                    {
                        ['', 'L0', 'L1', 'L2', 'L3', 'L4'].map((title, index) => (
                            <th
                                key={ title }
                                className={ `table__cell table__cell--head ${hoveredCell?.rowIndex === 0 || hoveredCell?.colIndex === index ? 'table__cell--hovered' : ''}` }
                                onMouseEnter={ () => setHoveredCell({ rowIndex: 0, colIndex: index }) }
                                onMouseLeave={ resetHoveredCell }
                            >
                                { title }
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    [
                        'Develonica',
                        'Ижевск',
                        'Кострома',
                        'Москва',
                    ].map((city, cityIndex) => (
                        <tr key={ city }>
                            <td
                                className={ `table__cell ${cityIndex === 0 ? 'table__cell--bold' : ''} ${hoveredCell?.rowIndex === cityIndex + 1 || hoveredCell?.colIndex === 0 ? 'table__cell--hovered' : ''}` }
                                onMouseEnter={ () => setHoveredCell({ rowIndex: cityIndex + 1, colIndex: 0 }) }
                                onMouseLeave={ resetHoveredCell }
                            >
                                { city }
                            </td>
                            {
                                FAKE_DATA[cityIndex].map((data, index) => (
                                    <td
                                        key={ index }
                                        className={ `table__cell ${hoveredCell?.rowIndex === cityIndex + 1 || hoveredCell?.colIndex === index + 1 ? 'table__cell--hovered' : ''}` }
                                        onMouseEnter={ () => setHoveredCell({ rowIndex: cityIndex + 1, colIndex: index + 1 }) }
                                        onMouseLeave={ resetHoveredCell }
                                    >
                                        { data }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
