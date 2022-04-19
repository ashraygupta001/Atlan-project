import React, {useState, useMemo, useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import TableRender from './TableRender';

function DataOperations({columns, data}) {
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
		let Header = [];
		for (let i = 0; i < data.data[0].length; i++) {
			for (let j = 0; j < columns.length; j++) {
				if (columns[j] === i) {
					Header.push(data.data[0][i]);
					break;
				}
			}
		}
		const parseColumns = Header.map((col, i) => {
			return {
				Header: col,
				accessor: col.toLowerCase(),
			};
		});
		let tempRows = [];
		for (let i = 1; i < data.data.length; i++) {
			let temp2Row = [];
			for (let j = 0; j < data.data[i].length; j++) {
				for (let a = 0; a < columns.length; a++) {
					if (columns[a] === j) {
            temp2Row.push(data.data[i][j]);
					}
				}
			}
			tempRows.push(temp2Row);
    }
		const parseRows = tempRows.map(row => {
      return row.reduce((acc, cur, i) => {
				acc[parseColumns[i].accessor] = cur;
				return acc;
			}, {});
		});
		setColumnData(parseColumns);
    setRowData(parseRows);
  }, [data, columns]);

  const columnsData = useMemo(() => columnData, [columnData]);
  const rowsData = useMemo(() => rowData, [rowData]);
  return (
    <Box>
      <TableRender columns={columnsData} data={rowsData} />
    </Box>
  );
}

export default DataOperations;
