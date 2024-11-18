import React from 'react';

import './table.css';

interface ITableContext {
    hoveredCell: { rowIndex: number; colIndex: number; } | null;
    addHoveredCell: (cell: { rowIndex: number; colIndex: number; }) => void;
    resetHoveredCell: () => void;
}
const TableContext = React.createContext<ITableContext>({
    hoveredCell: null,
    addHoveredCell: () => {},
    resetHoveredCell: () => {},
});

interface IProps {
    className?: string;
    children: React.ReactNode;
}
function Table(props: Readonly<IProps>) {
    const { className, children } = props;

    const [hoveredCell, setHoveredCell] = React.useState<{ rowIndex: number; colIndex: number; } | null>(null);
    const resetHoveredCell = React.useCallback(() => setHoveredCell(null), []);

    const contextValue = React.useMemo(
        () => ({ hoveredCell, addHoveredCell: setHoveredCell, resetHoveredCell }),
        [hoveredCell, resetHoveredCell],
    );

    return (
        <TableContext.Provider value={ contextValue }>
            <table className={ `${className} table` }>
                { children }
            </table>
        </TableContext.Provider>
    );
}

interface ICellProps {
    className?: string;
    children: React.ReactNode;
    rowIndex: number;
    colIndex: number;
    head?: true;
}
Table.Cell = function Cell(props: ICellProps) {
    const {
        className,
        rowIndex,
        colIndex,
        head,
        children,
    } = props;

    const {
        hoveredCell,
        addHoveredCell,
        resetHoveredCell,
    } = React.useContext(TableContext);

    const hovered = hoveredCell?.rowIndex === rowIndex || hoveredCell?.colIndex === colIndex;
    const cellProps = {
        className: `${className} table__cell ${head ? 'table__cell--head' : ''} ${hovered ? 'table__cell--hovered' : ''}`,
        onMouseEnter: () => addHoveredCell({ rowIndex, colIndex }),
        onMouseLeave: resetHoveredCell,
    };

    if (head) {
        return (
            <th { ...cellProps }>
                { children }
            </th>
        );
    }

    return (
        <td { ...cellProps }>
            { children }
        </td>
    );
};

export default Table;

