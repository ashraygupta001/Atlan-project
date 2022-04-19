import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, Box, Stack, Text } from '@chakra-ui/react';

function QueryButtons({ fileName, setColumns }) {
	const [value, setValue] = useState('1');
	useEffect(() => {
		if (value === '1') {
			setColumns([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
		} else if (value === '2') {
			setColumns([0, 1, 5, 6]);
		} else if (value === '3') {
			setColumns([1, 5])
		} else if (value === '4') {
			setColumns([0, 1, 2, 3, 4]);
		} else if (value === '5') { 
			setColumns([0,1,2])
		} else {
			setColumns([0,2,4])
		}

	}, [value]);

	return (
		<Box>
			{fileName === 'products.csv' && (
				<RadioGroup onChange={setValue} value={value}>
					<Stack direction="column" spacing="15">
						<Radio value="1">Show Full Data</Radio>
						<Radio value="2">Select (ProductID, ProductName, UnitPrice, UnitInStock From Products)</Radio>
						<Radio value="3">Select (ProductName, UnitPrice) From Products</Radio>
					</Stack>
				</RadioGroup>
			)}
			{fileName === 'order_details.csv' && (
				<RadioGroup onChange={setValue} value={value}>
					<Stack direction="column" spacing="15">
						<Radio value="4">Show Full Data</Radio>
						<Radio value="5">Select (OrderId, ProductId, UnitPrice) from Order_details</Radio>
						<Radio value="6">Select (OrderId, UnitPrice, Discount) from Order_details</Radio>
					</Stack>
				</RadioGroup>
			)}
		</Box>
	);
}

export default QueryButtons;
