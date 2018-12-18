import styled from "styled-components";

const GiveAway = styled.div`
	height: 41.6rem;

	background-color: #fff;
	color: #242424;
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 3.9rem 22.2rem 7.8rem 8.7rem;
	grid-template-areas: "entered" "image" "title" "footer";
	.entered {
		grid-area: entered;
	}

	.entered div {
		background-color: #242424;
		width: 15.5rem;
		height: 4rem;
		color: #f8f8f8;
		font-family: GothamBold, sans-serif;
		font-size: 1.4rem;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.image {
		height: 22.1rem;
		grid-area: image;
	}

	h4.title {
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
		line-height: 1;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		text-align: center;
		grid-area: title;
	}

	.footer {
		font-size: 1.6rem;
		display: flex;
		grid-area: footer;
	}

	.footer ul.entries-list {
		flex: 1 0 auto;
		display: flex;
	}

	.footer ul.entries-list li {
		width: 50%;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
	}

	.footer ul.entries-list li:first-child {
		position: relative;
	}

	.footer ul.entries-list li:first-child:after {
		background-color: #d8d8d8;
		content: "";
		width: 0.2rem;
		height: 5.4rem;
		position: absolute;
		right: -0.1rem;
	}

	.footer ul.entries-list li:first-child .amount {
		font-family: GothamBold, sans-serif;
	}

	.footer ul.entries-list li span.amount {
		padding-bottom: 0.5rem;
		font-size: 2.4rem;
	}
`;

const GiveAwayCard = props => (
	<GiveAway>
		<div className="entered">
			<div>
				<span>featured</span>
			</div>
		</div>
		<div className="image" />
		<h4 className="title">Offer Title Here</h4>
		<div className="footer">
			<ul className="entries-list">
				<li>
					<span className="amount">5K</span> <span className="title">Views</span>
				</li>
				<li>
					<span className="amount">237</span> <span className="title">Conversions</span>
				</li>
			</ul>
		</div>
	</GiveAway>
);

export default GiveAwayCard;
