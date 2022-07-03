import PropTypes from 'prop-types';
import { TableRow, TableData } from './transaction.styled';

export default function TableRowItem({ type, amount, currency }) {
	return (
		<>
			<TableRow>
				<TableData>{type}</TableData>
      			<TableData>{amount}</TableData>
				<TableData>{currency}</TableData>
			</TableRow>
		</>
	)
}

TableRowItem.propTypes = {
	type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}