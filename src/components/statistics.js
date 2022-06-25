import PropTypes from 'prop-types';

export default function Statistic({ title, stats }) {
	const isTitle = { title };
	return	(
		<section class="statistics">
  			<h2 class="title">{isTitle && title}</h2>

			<ul class="stat-list">
				{stats.map((stat) => (
					<li class="item" key={stat.id}>
						<StatisticItem label={stat.label} percentage = {stat.percentage}/>
						{/* <span class="label">{stat.label}</span>
						<span class="percentage">{stat.percentage}</span> */}
					</li>))}
			</ul>
		</section>
	)
}

function StatisticItem({label, percentage}) {
	return (
		<>
			<span class="label">{label}</span>
			<span class="percentage">{percentage}</span>
		</>
	)
}

Statistic.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired,
}

StatisticItem.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
}