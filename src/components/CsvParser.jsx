import React, { useState, useEffect } from 'react';
import { useCSVReader } from 'react-papaparse';
import { Box, Button, Center, Divider, HStack, VStack } from '@chakra-ui/react';
import { DeleteIcon, AttachmentIcon } from '@chakra-ui/icons';
import DataOperations from './DataOperations';
import Header from './Header';
import QueryButtons from './QueryButtons';

function CsvParser() {
	const { CSVReader } = useCSVReader();
	const [data, setData] = useState(null);
	const [columns, setColumns] = useState([]);
	const [fileName, setFileName] = useState('');
	const [query, setQuery] = useState([]);

	let array = [];
	const handelUploadAccepted = (data, acceptedFile) => {
		setData(data);
		setFileName(acceptedFile.name);
		let a = data.data[0].length;
		for (let i = 0; i < a; i++) {
			array.push(i);
		}
		setQuery(array);
	};
	useEffect(() => {
	if (data) {
		setColumns(query);
	}
	}, [data, query]);

	const handelRemoveClick = () => {
		setData(null);
		setFileName('');
	};

	return (
		<>
			<VStack spacing="8" align="stretch">
				<Center>
					<CSVReader onUploadAccepted={handelUploadAccepted}>
						{({ getRootProps, acceptedFile, getRemoveFileProps }) => (
							<HStack spacing="10">
								<Box>
									<Button
										size="md"
										leftIcon={<AttachmentIcon />}
										colorScheme="whatsapp"
										{...getRootProps()}
									>
										{' '}
										Upload File{' '}
									</Button>
								</Box>
								<Box border="2px dotted grey" w="15em" h="2.5em">
									<Center>{data && acceptedFile && acceptedFile.name}</Center>
								</Box>
								<Box>
									<Button
										size="md"
										leftIcon={<DeleteIcon />}
										colorScheme="red"
										{...getRemoveFileProps()}
										onClick={handelRemoveClick}
									>
										{' '}
										Remove File{' '}
									</Button>
								</Box>
							</HStack>
						)}
					</CSVReader>
				</Center>
				<Divider />
				{data && <DataOperations columns={columns} data={data} />}
				{fileName === 'products.csv' || fileName === 'order_details.csv' ? (
					<VStack align="stretch">
						<Divider />
						<Center>
							<QueryButtons fileName={fileName} setColumns={setQuery} />
						</Center>
					</VStack>
				) : null}
			</VStack>
		</>
	);
}

export default CsvParser;
