import styled from "styled-components";

const InActivitiesCard = styled.div`
	background-color: #f8f8f8;
	color: ${props => (props.complete ? "#f8f8f8" : "#242424")};
	height: 41.6rem;
	display: grid;
	grid-gap: 0;
	grid-template-columns: 2.4rem auto 2.4rem;
	grid-template-rows: 9.3rem 4.5rem 27.8rem;
	border: 0.2rem dashed #cecece;
	.title {
		font-family: GothamBold, sans-serif;
		font-size: 2.4rem;
		line-height: 1.08;
		grid-area: 2/2/3/3;
	}
	.description {
		font-size: 1.6rem;
		line-height: 1.69;
		letter-spacing: normal;
		grid-area: 3/2/4/3;
	}
`;

export default InActivitiesCard;
