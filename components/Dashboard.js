import Header from "./Header";
import BackstageFooter from "./BackstageFooter";
import DashboardDisclaimer from "./DashboardDisclaimer";
import DashboardActivities from "./DashboardActivities";
import DashboardGiveAways from "./DashboardGiveAways";
import DashboardStyles from "./styles/DashboardStyles";
import DashboardJumbo from "./DashboardJumbo";

const Dashboard = () => (
	<div>
		<DashboardStyles />
		<Header />
		<DashboardJumbo />
		<main>
			<DashboardActivities />
			<DashboardGiveAways />
			<DashboardDisclaimer>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut purus mauris. Nullam suscipit
					libero sed nisi aliquam, sed ullamcorper orci vulputate. Nullam ut risus diam. Morbi tempor lectus
					sed laoreet imperdiet. Quisque blandit, tortor nec maximus convallis, lectus ipsum tempor lorem, ac
					porta turpis nunc dignissim dui. Nullam luctus orci lorem, id pharetra arcu rutrum vitae.
					Pellentesque vehicula diam et viverra blandit. Vestibulum vitae malesuada ipsum. Maecenas mi ipsum,
					tempor a aliquam quis, dictum et tortor. Nullam aliquet urna tincidunt libero congue, ac cursus
					tortor varius. Pellentesque varius elit eu nisl commodo tincidunt. Nunc non ligula quis ex suscipit
					fringilla. Ut nec nulla quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
					porttitor enim ut tellus porta, a tempor dui rhoncus.
				</p>
			</DashboardDisclaimer>
		</main>
		<BackstageFooter />
	</div>
);

export default Dashboard;
