import PropTypes from 'prop-types';
import StatisticItem from "./statisticItem"
import {Conteiner, Title, StatisticList, StatisticLi} from './Statistics.styled'

export default function Statistic({ title, stats }) {
	const isTitle = { title };
	return (
		<Conteiner>
		
  			<Title>{isTitle && title}</Title>

			<StatisticList>
				{stats.map((stat) => (
					<StatisticLi key={stat.id}>
						<StatisticItem label={stat.label} percentage = {stat.percentage}/>
						{/* <span class="label">{stat.label}</span>
						<span class="percentage">{stat.percentage}</span> */}
					</StatisticLi>))}
			</StatisticList>
			</Conteiner>
	)
}

// function StatisticItem({label, percentage}) {
// 	return (
// 		<>
// 			<span className="label">{label}</span>
// 			<span className="percentage">{percentage} %</span>
// 		</>
// 	)
// }

Statistic.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired,
}

// StatisticItem.propTypes = {
// 	label: PropTypes.string.isRequired,
// 	percentage: PropTypes.number.isRequired,
// }