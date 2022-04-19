import React from 'react';
import { useTable, usePagination } from 'react-table';
import {
	Table,
	Tbody,
	Thead,
	Tr,
	Th,
	Td,
	Flex,
	Tooltip,
	IconButton,
	Box,
	Text,
} from '@chakra-ui/react';
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';

function TableRender({ columns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		gotoPage,
		state: { pageIndex, pageSize },
		nextPage,
		previousPage,
		pageCount,
		pageOptions,
	} = useTable(
		{
			columns: columns,
			data: data,
			initialState: { pageIndex: 0, pageSize: 15 },
		},
		usePagination,
	);

	return (
		<Box>
			<Table
				{...getTableProps()}
				variant="striped"
				colorScheme="telegram"
				size="sm"
			>
				<Thead>
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<Tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
									);
								})}
							</Tr>
						);
					})}
				</Tbody>
			</Table>
			<Flex justify="space-between" align="center" m={4}>
				<Flex gap="4">
					<Tooltip label="First Page">
						<IconButton
							icon={<ArrowLeftIcon h="3" w="3" />}
							onClick={() => gotoPage(0)}
						/>
					</Tooltip>
					<Tooltip label="Previous Page">
						<IconButton
							icon={<ChevronLeftIcon h="5" w="5" />}
							onClick={previousPage}
						/>
					</Tooltip>
				</Flex>
				<Flex align="center" gap="2">
					Page
					<Text fontWeight="bold" as="span">
						{pageIndex + 1}
					</Text>
					of
					<Text fontWeight="bold" as="span">
						{pageOptions.length}
					</Text>
				</Flex>
				<Flex gap="4">
					<Tooltip label="Next Page">
						<IconButton
							icon={<ChevronRightIcon h="5" w="5" />}
							onClick={nextPage}
						/>
					</Tooltip>
					<Tooltip label="Last Page">
						<IconButton
							icon={<ArrowRightIcon h="3" w="3" />}
							onClick={() => gotoPage(pageCount - 1)}
						/>
					</Tooltip>
				</Flex>
			</Flex>
		</Box>
	);
}

export default TableRender;
