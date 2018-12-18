import styled from "styled-components";

const ActivitiesCard = styled.div`
	background-color: ${props => (props.complete ? "#242424" : "#f8f8f8")};
	color: ${props => (props.complete ? "#f8f8f8" : "#242424")};
	height: 41.6rem;
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
	display: grid;
	grid-gap: 0;
	grid-template-columns: 2.4rem 13.1rem auto 2.4rem;
	grid-template-rows: 4rem 20rem 5.6rem 4.8rem 3.1rem 4.1rem;
	.image {
		background-image: url(${props => (props.complete ? "/static/images/rest-01.png" : "/static/images/rest-02.png")});
		background-repeat: no-repeat;
		background-size: cover;
		grid-area: 1/1/3/5;
	}
	.status {
		background-color: ${props => (props.complete ? "#242424" : "#f8f8f8")};
		font-family: GothamBold, sans-serif;
		font-size: 14px;
		letter-spacing: 1.8px;
		text-transform: uppercase;
		grid-area: 1/1/2/3;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.title {
		padding-top: 2rem;
		font-family: GothamBold, sans-serif;
		font-size: 2.4rem;
		line-height: 1.08;
		grid-area: 3/2/4/4;
	}
	.description {
		font-size: 1.6rem;
		line-height: 1.69;
		letter-spacing: normal;
		grid-area: 4/2/5/4;
	}
	.score {
		/* background-image: url(${props => (props.complete ? "/static/images/icon-star-white.svg" : "")}); */
		background-repeat: no-repeat;
		background-size: 2rem 2rem;
		background-position: top 0.2rem left 7.5rem;
		font-family: GothamBold, sans-serif;
		font-size: 2.4rem;
		letter-spacing: normal;
		grid-area: 5/2/6/4;
		position: relative;
	}
	.tickets {
		font-size: 1.6rem;
		grid-area: 6/2/7/4;
	}
`;

export default ActivitiesCard;
