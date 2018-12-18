import { GiveAways, GiveAwaysInner } from "./styles/GiveAwaysStyles";
import GiveAwayCard from "./GiveAwayCard";
import GridTitle from "./GridTitle";

const DashboardGiveAways = props => (
	<GiveAways>
		<GiveAwaysInner>
			<GridTitle>
				<h3>Featured Pages</h3>
				<p>Staff picks, member favorites and otherwise unique and inspiring pages.</p>
			</GridTitle>
			<div className="workflow_dashboard--awards-grid">
				<GiveAwayCard />
				<GiveAwayCard />
				<GiveAwayCard />
				<GiveAwayCard />
				<GiveAwayCard />
				<GiveAwayCard />
			</div>
		</GiveAwaysInner>
	</GiveAways>
);

export default DashboardGiveAways;
