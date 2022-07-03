import PropTypes from 'prop-types';
import TableRowItem from './transactionItem';
import { Table, TableHeaders, TableHead } from './transaction.styled';

export default function TransactionTable({ items }) {
	return (
		<Table>
			<thead>
				<TableHeaders>
					<TableHead>Type</TableHead>
					<TableHead>Amount</TableHead>
					<TableHead>Currency</TableHead>
				</TableHeaders>
			</thead>

			<tbody>
				{items.map((item) => (
					<TableRowItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
				))}
			</tbody>
		</Table>
	)
}

TransactionTable.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	)
}