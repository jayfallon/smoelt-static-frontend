import { Activities, ActivitiesInner } from "./styles/ActivityStyles";
import ActivitiesCard from "./ActivitiesCard";

import GridTitle from "./GridTitle";

const DashboardActivities = props => (
	<Activities>
		<ActivitiesInner>
			<GridTitle>
				<h3>most popular</h3>
				<p>Our most popular landing pages as of December 12th, 2018.</p>
			</GridTitle>
			<div className="workflow_dashboard--awards-grid">
				<ActivitiesCard complete>
					<div className="image" />
					<div className="status">
						<span>popular</span>
					</div>
					<h4 className="title">Supper Awesome</h4>
					<p className="description">Lorem ipsum dolor sit ame... </p>
					<p className="score">120K/8%</p>
					<p className="tickets">Visits &amp; Conversions</p>
				</ActivitiesCard>
				<ActivitiesCard complete>
					<div className="image" />
					<div className="status">
						<span>popular</span>
					</div>
					<h4 className="title">Limited Time Only!</h4>
					<p className="description">Iusto fugit illo quibusdam veniam ...</p>
					<p className="score">89K/7.5%</p>
					<p className="tickets">Visits &amp; Conversions</p>
				</ActivitiesCard>
				<ActivitiesCard new>
					<div className="image" />
					<div className="status">
						<span>new</span>
					</div>
					<h4 className="title">New Offer</h4>
					<p className="description">tempore molestias!</p>
					<p className="score">2K/18%</p>
					<p className="tickets">Visits &amp; Conversions</p>
				</ActivitiesCard>
			</div>
		</ActivitiesInner>
	</Activities>
);

export default DashboardActivities;
