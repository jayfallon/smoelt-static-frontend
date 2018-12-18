import styled from "styled-components";

const Activities = styled.section`
	background-color: #fff;
	padding: 0 0 8rem;
	color: #242424;
`;

const ActivitiesInner = styled.div`
	margin: ${props => props.theme.margin};
	padding: 8rem 1rem 1rem;
	max-width: ${props => props.theme.maxWidth};

	.workflow_dashboard--grid-title {
		margin: 0 auto;
		padding-bottom: 3.2rem;
		max-width: 128rem;
		font-size: 1.6rem;
	}

	.workflow_dashboard--grid-title h3 {
		font-family: GothamBold, sans-serif;
		font-size: 2.4rem;
		line-height: 1.08;
		letter-spacing: 0.5rem;
		text-transform: uppercase;
	}

	.workflow_dashboard--grid-title p {
		padding: 1.2rem 0 0.8rem;
	}

	.workflow_dashboard--awards-grid {
		margin: 0 auto;
		max-width: 128rem;
		display: grid;
		grid-gap: 1.6rem;
		grid-template-columns: repeat(auto-fill, minmax(36.4rem, 1fr));
	}
`;

export { Activities, ActivitiesInner };
