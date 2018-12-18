import styled from "styled-components";
import { GiveAwayButton } from "./styles/SubmitButton";

const DasboardJumboStyles = styled.article`
	background-image: url(/static/images/simon-launay-1063331-unsplash.png);
	background-repeat: no-repeat;
	background-position: top center;
	background-color: #242424;
	padding: 12rem 0 5.6rem;

	.jumboInner {
		margin: 0 auto 0;
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
	}

	h2 {
		color: #f8f8f8;
		font-family: GothamBold, sans-serif;
		font-size: 3.4rem;
		line-height: 1.06;
	}

	.workflow_dashboard--content-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.workflow_dashboard--greeting {
		max-width: 52.5rem;
		color: #f8f8f8;
	}

	.workflow_dashboard--greeting p {
		padding-top: 1.6rem;
		font-size: 1.6rem;
		line-height: 1.63;
	}

	.workflow_dashboard--tickets {
		background-color: #fff;
		padding: 2.4rem;
		width: 23.8rem;
		height: 15.9rem;
		color: #242424;
		display: grid;
		grid-template-columns: 7.8rem 1fr;
		grid-template-rows: 7.4rem 3.9rem;
		grid-template-areas:
			"image tickets"
			"submit submit";
	}

	.workflow_dashboard--tickets .image {
		grid-area: image;
		img {
			width: 60px;
			height: 60px;
		}
	}

	.workflow_dashboard--tickets .tickets {
		color: #242424;
		font-family: GothamBold, sans-serif;
		font-size: 1.4rem;
		line-height: 1.5;
		letter-spacing: 1.8px;
		text-align: center;
		text-transform: uppercase;
		grid-area: tickets;
	}

	.workflow_dashboard--tickets .submit {
		font-family: GothamBold, sans-serif;
		font-size: 1.4rem;
		text-transform: uppercase;
		text-align: center;
		grid-area: submit;
	}
`;

const DashboardJumbo = () => (
	<DasboardJumboStyles>
		<div className="jumboInner">
			<h2>Welcome, Jay!</h2>
			<div className="workflow_dashboard--content-wrapper">
				<div className="workflow_dashboard--greeting">
					<p>
						Thank you for joining the Smoelt & Co.'s Landing Pages. Take a look at some of the most popular
						pages in our network below. Each one represents a step forward in business and network growth,
						all the while strengthening the relationship between creative marketers and their audience.
					</p>
					<p>When you're ready to create your first landing page, just press the Create! button any time.</p>
				</div>
				{/* <div className="workflow_dashboard--tickets">
					<div className="image">
						<img src="/static/images/icon-page.png" alt="Total Tickets" />
					</div>
					<div className="tickets">0 Landing Pages</div>
					<div className="submit">
						<GiveAwayButton>Create!</GiveAwayButton>
					</div>
				</div> */}
			</div>
		</div>
	</DasboardJumboStyles>
);

export default DashboardJumbo;
