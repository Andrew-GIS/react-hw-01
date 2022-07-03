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
					</StatisticLi>))}
			</StatisticList>
			</Conteiner>
	)
}

Statistic.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired,
}