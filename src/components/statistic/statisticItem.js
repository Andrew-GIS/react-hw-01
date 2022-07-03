import PropTypes from 'prop-types';
import { DataFormat, Percentage } from './Statistics.styled'

export default function StatisticItem({ label, percentage }) {
	return (
		<>
			<DataFormat>{label}</DataFormat>
			<Percentage>{percentage} %</Percentage>
		</>
	)
}

StatisticItem.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
}